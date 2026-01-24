import {
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaPlane,
  FaShieldAlt,
} from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { useTranslation } from "react-i18next";
// import equipeImage from "../../assets/images/equipe.jpg";
import equipeImage from "../../assets/images/equipe-3.png";
import styles from "./About.module.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className={styles["team-section"]} id="notre-equipe">
      <div className={styles["team-container"]}>
        <header className={styles["team-header"]}>
          <h2>Notre équipe</h2>
          <p className={styles["team-intro"]}>
            Deux regards complémentaires, une même exigence d'excellence.
          </p>
          <div className={styles["header-divider"]}>
            <span></span>
            <span className={styles["divider-dot"]}></span>
            <span></span>
          </div>
        </header>

        <div className={styles["team-content"]}>
          <div className={styles["team-profile"]}>
            <h3>Rémi</h3>
            <span className={styles["team-title"]}>
              Co-fondateur – Immobilier & valorisation
            </span>
            <div className={styles["profile-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
            <p>
              Amoureux de l'immobilier, Rémi accorde une attention particulière
              à la valorisation des biens, à la qualité des espaces et au soin
              apporté à chaque logement. Sa vision : révéler le potentiel de
              chaque lieu avec exigence et cohérence.
            </p>
          </div>

          <div className={styles["team-portrait"]}>
            <img
              src={equipeImage}
              alt="Rémi et Laura – Fondateurs Effet Coup de Cœur"
            />
            <span className={styles["team-role"]}>Fondateurs & Concierges</span>
          </div>

          <div className={styles["team-profile"]}>
            <h3>Laura</h3>
            <span className={styles["team-title"]}>
              Co-fondatrice – Expérience & hospitalité
            </span>
            <div className={styles["profile-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
            <p>
              Une passionnée du tourisme, qui connaît les attentes des voyageurs
              et qui se préoccupe de l'importance des petits détails afin de
              pouvoir transformer un séjour en une véritable expérience.
            </p>
          </div>
        </div>

        <div className={styles["team-signature"]}>
          <span></span>
          <em>L'élégance d'un lieu, la sérénité d'un service.</em>
          <span></span>
        </div>
      </div>
    </section>
  );
}
