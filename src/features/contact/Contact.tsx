import { FaMapPin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className={styles.container} id="contactez-nous">
      <div className={styles.header}>
        <h1>{t("contact.title")}</h1>
        <p className={styles.intro}>{t("contact.subtitle")}</p>
        <div className={styles.headerDivider}>
          <span></span>
          <span className={styles.dividerDot}></span>
          <span></span>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2>{t("contact.coordinates")}</h2>
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <FaMapPin className={styles.icon} />
              <div>
                <h3>{t("contact.address")}</h3>
                <a
                  href="https://maps.app.goo.gl/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  37390 Notre-Dame-d'Oé
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <FaPhoneAlt className={styles.icon} />
              <div>
                <h3>{t("contact.phone")}</h3>
                <a href="tel:0682117625">06 82 11 76 25</a>
                <a href="tel:0675884103">06 75 88 41 03</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <MdEmail className={styles.icon} />
              <div>
                <h3>{t("contact.email")}</h3>
                <a href="mailto:ecdconciergerie@gmail.com">
                  ecdconciergerie@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h2>{t("contact.formTitle")}</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
