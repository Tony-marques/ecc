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
    image: maison1,
    airbnbUrl: "https://www.airbnb.fr",
    capacity: 6,
    bedrooms: 3,
  },
  {
    id: 2,
    title: "Titre du bien",
    location: "Tours, France",
    description: "Description du bien",
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
                <img src={property.image} alt={property.title} />
                <div className={styles.overlay}>
                  <span>{t("properties.viewOnAirbnb")}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3>{property.title}</h3>
                <p className={styles.location}>📍 {property.location}</p>
                <p className={styles.description}>{property.description}</p>
                <div className={styles.details}>
                  <span>👥 {property.capacity} personnes</span>
                  <span>🛏️ {property.bedrooms} chambres</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
