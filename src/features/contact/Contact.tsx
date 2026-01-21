import { FaMapPin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./Contact.module.css";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className={styles.container} id="contactez-nous">
      <div className={styles.header}>
        <h1>Contactez-nous</h1>
        <p>Nous sommes à votre écoute pour répondre à toutes vos questions</p>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2>Nos coordonnées</h2>
          <div className={styles.infoCard}>
            <div className={styles.infoItem}>
              <FaMapPin className={styles.icon} />
              <div>
                <h3>Adresse</h3>
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
                <h3>Téléphone</h3>
                <a href="tel:0699999999">06 75 88 41 03</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <MdEmail className={styles.icon} />
              <div>
                <h3>Email</h3>
                <a href="mailto:ecdconciergerie@gmail.com">
                  ecdconciergerie@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formContainer}>
          <h2>Envoyez-nous un message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
