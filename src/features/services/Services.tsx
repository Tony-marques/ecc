import { useTranslation } from "react-i18next";
import styles from "./Services.module.css";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className={styles["services-section"]} id="nos-services">
      <div className={styles["services-container"]}>
        <header className={styles["services-header"]}>
          <h2>{t("services.title")}</h2>
          <div className={styles["header-divider"]}>
            <span></span>
            <span className={styles["divider-dot"]}></span>
            <span></span>
          </div>
        </header>

        <div className={styles["services-content"]}>
          {/* Valorisation */}
          <div className={styles["service-card"]}>
            <h3>{t("services.valorization.title")}</h3>
            <div className={styles["service-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
            <ul>
              <li>{t("services.valorization.point1")}</li>
              <li>{t("services.valorization.point2")}</li>
              <li>{t("services.valorization.point3")}</li>
            </ul>
          </div>

          {/* Accueil et suivi */}
          <div className={styles["service-card"]}>
            <h3>{t("services.welcome.title")}</h3>
            <div className={styles["service-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
            <ul>
              <li>{t("services.welcome.point1")}</li>
              <li>{t("services.welcome.point2")}</li>
              <li>{t("services.welcome.point3")}</li>
            </ul>
          </div>

          {/* Suivi quotidien */}
          <div className={styles["service-card"]}>
            <h3>{t("services.dailyFollowUp.title")}</h3>
            <div className={styles["service-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
            <ul>
              <li>{t("services.dailyFollowUp.point1")}</li>
              <li>{t("services.dailyFollowUp.point2")}</li>
              <li>{t("services.dailyFollowUp.point3")}</li>
            </ul>
          </div>

          {/* Frais de lancement */}
          <div className={`${styles["service-card"]} ${styles.long}`}>
            <h3>{t("services.launchFees.title")}</h3>
            <div className={styles["service-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
            <p>{t("services.launchFees.intro")}</p>
            <ul>
              <li>{t("services.launchFees.point1")}</li>
              <li>{t("services.launchFees.point2")}</li>
              <li>{t("services.launchFees.point3")}</li>
              <li>{t("services.launchFees.point4")}</li>
              <li>{t("services.launchFees.point5")}</li>
              <li>{t("services.launchFees.point6")}</li>
              <li>{t("services.launchFees.point7")}</li>
            </ul>
          </div>

          {/* Résidence secondaire */}
          <div className={`${styles["service-card"]} ${styles.long}`}>
            <h3>{t("services.secondaryResidence.title")}</h3>
            <div className={styles["service-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
            <ul>
              <li>{t("services.secondaryResidence.point1")}</li>
              <li>{t("services.secondaryResidence.point2")}</li>
              <li>{t("services.secondaryResidence.point3")}</li>
              <li>{t("services.secondaryResidence.point4")}</li>
              <li>{t("services.secondaryResidence.point5")}</li>
              <li>{t("services.secondaryResidence.point6")}</li>
              <li>{t("services.secondaryResidence.point7")}</li>
            </ul>
            <p className={styles["service-note"]}>
              {t("services.secondaryResidence.note")}
            </p>
          </div>

          {/* Tarifs */}
          <div
            className={`${styles["service-card"]} ${styles["pricing-card"]}`}
          >
            <h3>{t("services.pricing.title")}</h3>
            <div className={styles["service-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
            <p>{t("services.pricing.content")}</p>
          </div>

          {/* Services sur mesure */}
          <div className={`${styles["service-card"]} ${styles["custom-card"]}`}>
            <h3>{t("services.custom.title")}</h3>
            <div className={styles["service-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
            <p>{t("services.custom.content")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
