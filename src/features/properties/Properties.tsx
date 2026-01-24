import styles from "./Properties.module.css";
import maison1 from "../../assets/images/maison1.jfif";
import maison2 from "../../assets/images/maison2.jfif";
import maison3 from "../../assets/images/maison3.jfif";
import maison4 from "../../assets/images/maison4.jfif";
import { useTranslation } from "react-i18next";

interface Property {
  id: number;
  title: string;
  location: string;
  description: string;
  titleKey?: string;
  locationKey?: string;
  descriptionKey?: string;
  image: string;
  airbnbUrl: string;
  capacity: number;
  bedrooms: number;
}

const properties: Property[] = [
  {
    id: 1,
    title: "Titre du bien",
    location: "Tours, France",
    description: "Description du bien",
    titleKey: "properties.items.1.title",
    locationKey: "properties.items.1.location",
    descriptionKey: "properties.items.1.description",
    image: maison1,
    airbnbUrl: "https://www.airbnb.fr",
    capacity: 4,
    bedrooms: 2,
  },
  {
    id: 2,
    title: "Titre du bien",
    location: "Tours, France",
    description: "Description du bien",
    titleKey: "properties.items.2.title",
    locationKey: "properties.items.2.location",
    descriptionKey: "properties.items.2.description",
    image: maison2,
    airbnbUrl: "https://www.airbnb.fr",
    capacity: 4,
    bedrooms: 2,
  },
  {
    id: 3,
    title: "Titre du bien",
    location: "Tours, France",
    description: "Description du bien",
    titleKey: "properties.items.3.title",
    locationKey: "properties.items.3.location",
    descriptionKey: "properties.items.3.description",
    image: maison3,
    airbnbUrl: "https://www.airbnb.fr",
    capacity: 8,
    bedrooms: 4,
  },
  {
    id: 4,
    title: "Titre du bien",
    location: "Tours, France",
    description: "Description du bien",
    titleKey: "properties.items.4.title",
    locationKey: "properties.items.4.location",
    descriptionKey: "properties.items.4.description",
    image: maison4,
    airbnbUrl: "https://www.airbnb.fr",
    capacity: 2,
    bedrooms: 1,
  },
];

export default function Properties() {
  const { t } = useTranslation();
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

        <div className={styles.grid}>
          {properties.map((property) => (
            <a
              key={property.id}
              href={property.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <img
                  src={property.image}
                  alt={
                    property.titleKey ? t(property.titleKey) : property.title
                  }
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <span>{t("properties.viewOnAirbnb")}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3>
                  {property.titleKey ? t(property.titleKey) : property.title}
                </h3>
                <p className={styles.location}>
                  📍{" "}
                  {property.locationKey
                    ? t(property.locationKey)
                    : property.location}
                </p>
                <p className={styles.description}>
                  {property.descriptionKey
                    ? t(property.descriptionKey)
                    : property.description}
                </p>
                <div className={styles.details}>
                  <span>
                    👥 {property.capacity} {t("properties.capacityLabel")}
                    {property.capacity > 1 && "s"}
                  </span>
                  <span>
                    🛏️ {property.bedrooms} {t("properties.bedroomsLabel")}
                    {property.bedrooms > 1 && "s"}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
