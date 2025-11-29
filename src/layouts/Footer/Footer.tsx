import { FaMapPin, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <img src="/logo.png" alt="logo" />
      <div className={styles.middle}>
        <h3>Contact</h3>
        <div className={styles.phone}>
          <FaPhoneAlt />
          <Link to="tel:0699999999">06 99 99 99 99</Link>
        </div>
        <div className={styles.address}>
          <FaMapPin />
          <Link to="https://maps.app.goo.gl/1234567890">37000 Tours</Link>
        </div>
        <div className={styles.email}>
          <MdEmail />
          <Link to="mailto:contact@effetcoupdecoeur.com">contact@effetcoupdecoeur.com</Link>
        </div>
      </div>
      <div className={styles.right}>
        <h3>Informations</h3>
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
      </div>
    </div>
  );
}
