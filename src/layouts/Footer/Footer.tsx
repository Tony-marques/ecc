import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/images/logo.svg";

export default function Footer() {
  const { t, i18n } = useTranslation();

  // URLs adaptées selon la langue
  const legalNoticeUrl =
    i18n.language === "fr" ? "/mentions-legales" : "/legal-notice";
  const privacyPolicyUrl =
    i18n.language === "fr"
      ? "/politique-de-confidentialite"
      : "/privacy-policy";

  return (
    <div className={styles.footer}>
      <div className={styles.logoWrapper}>
        <img
          src={logo}
          alt="Logo Effet Coup de Cœur - Conciergerie à Tours"
          loading="lazy"
          decoding="async"
        />
        <p className={styles.copyright}>
          Copyright © {new Date().getFullYear()} Effet Coup de Cœur
        </p>
      </div>
      <div className={styles.middle}>
        <h3>{t("footer.contact")}</h3>
        <div className={styles.phone}>
          <FaPhoneAlt />
          <Link to="tel:0682117625">06 82 11 76 25</Link>-
          <Link to="tel:0675884103">06 75 88 41 03</Link>
        </div>
        {/* <div className={styles.address}>
          <FaMapPin />
          <Link to="https://maps.app.goo.gl/1234567890">37000 Tours</Link>
        </div> */}
        <div className={styles.email}>
          <MdEmail />
          <Link to="mailto:ecdconciergerie@gmail.com">
            ecdconciergerie@gmail.com
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <h3>{t("footer.information")}</h3>
        <Link to={legalNoticeUrl}>{t("footer.legalNotice")}</Link>
        <Link to={privacyPolicyUrl}>{t("footer.privacyPolicy")}</Link>
      </div>
    </div>
  );
}
