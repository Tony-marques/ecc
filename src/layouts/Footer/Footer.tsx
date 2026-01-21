import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.middle}>
        <h3>Contact</h3>
        <div className={styles.phone}>
          <FaPhoneAlt />
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
        <h3>Informations</h3>
        <Link to="/mentions-legales">Mentions légales</Link>
        <Link to="/politique-de-confidentialite">
          Politique de confidentialité
        </Link>
      </div>
    </div>
  );
}
