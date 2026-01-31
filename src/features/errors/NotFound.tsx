import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./NotFound.module.css";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <main className={styles.notFoundPage}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* 404 Number */}
          <div className={styles.errorNumber}>404</div>

          {/* Decorative divider */}
          <div className={styles.divider}>
            <span></span>
            <span className={styles.dot}></span>
            <span></span>
          </div>

          {/* Title */}
          <h1 className={styles.title}>{t("notFound.title")}</h1>

          {/* Description */}
          <p className={styles.description}>{t("notFound.description")}</p>

          {/* CTA Buttons */}
          <div className={styles.actions}>
            <Link to="/" className={styles.primaryButton}>
              {t("notFound.homeButton")}
            </Link>
            <Link to="/#contactez-nous" className={styles.secondaryButton}>
              {t("notFound.contactButton")}
            </Link>
          </div>

          {/* Quick Links */}
          <div className={styles.quickLinks}>
            <p className={styles.quickLinksTitle}>{t("notFound.quickLinks")}</p>
            <div className={styles.links}>
              <Link to="/#nos-services">{t("nav.services")}</Link>
              <Link to="/#notre-equipe">{t("nav.about")}</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
