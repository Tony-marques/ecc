import {
  FaChartLine,
  FaHandshake,
  FaHeart,
  FaPlane,
  FaShieldAlt,
} from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
// import equipeImage from "../../assets/images/equipe.jpg";
import equipeImage from "../../assets/images/equipe-2.png";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.about} id="qui-sommes-nous">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Qui sommes-nous ?</h1>
          <p className={styles.intro}>
            Bienvenue chez Effet Coup de Cœur, votre conciergerie spécialisée
            dans la location courte durée.²²
          </p>
        </div>

        <div className={styles.teamSection}>
          <p className={styles.teamIntro}>
            Derrière ce projet, il y a nous : une équipe de deux passionnés,
            chacun avec son univers.
          </p>

          <h2 className={styles.teamHeading}>Notre équipe</h2>

          <div className={styles.teamPresentation}>
            <div className={styles.memberColumn}>
              <div className={styles.member}>
                <h3>Rémi</h3>
                <p>
                  Un amoureux de l'immobilier, attaché à la valorisation des
                  biens, à la qualité des espaces et au soin apporté à chaque
                  logement.
                </p>
              </div>
            </div>

            <div className={styles.teamImageContainer}>
              <img
                src={equipeImage}
                alt="Laura et Rémi - Équipe Effet Coup de Cœur"
                className={styles.teamImage}
              />
            </div>

            <div className={styles.memberColumn}>
              <div className={styles.member}>
                <h3>Laura</h3>
                <p>
                  Une passionnée du tourisme, qui connaît les attentes des
                  voyageurs et qui se préoccupe de l'importance des petits
                  détails afin de pouvoir transformer un séjour en une véritable
                  expérience.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.teamDescription}>
            <p>
              En associant nos deux passions, créer une conciergerie s'est
              imposé comme une évidence : un service où le bien-être des
              voyageurs et la gestion de votre logement se rencontrent.
            </p>
            <p>
              Nous mettons notre expertise et notre passion au service de votre
              projet, avec une attention particulière portée à chaque détail
              pour créer l'
              <strong>Effet Coup de Cœur</strong>.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.servicesSection}>
        <div className={styles.serviceBlock}>
          <div className={styles.serviceHeader}>
            <FaPlane className={styles.serviceIcon} />
            <h2>Pour les voyageurs</h2>
          </div>
          <div className={styles.serviceContent}>
            <p className={styles.serviceMission}>
              Notre mission : Créer l'<strong>Effet Coup de Cœur</strong> dès
              l'arrivée et jusqu'au départ.
            </p>
            <p>
              Nous voulons que nos voyageurs se sentent{" "}
              <strong>accueillis</strong>, <strong>rassurés</strong>,{" "}
              <strong>chouchoutés</strong>… et surtout qu'ils repartent avec
              l'envie de revenir.
            </p>
          </div>
        </div>

        <div className={styles.serviceBlock}>
          <div className={styles.serviceHeader}>
            <MdHomeWork className={styles.serviceIcon} />
            <h2>Pour les propriétaires</h2>
          </div>
          <div className={styles.serviceContent}>
            <p>
              Nous sommes là pour vous. Pour vous accompagner en toute
              confiance, vous soulager et vous offrir une tranquillité d'esprit
              totale.
            </p>
            <div className={styles.values}>
              <div className={styles.valuesList}>
                <div className={styles.valueItem}>
                  <FaShieldAlt className={styles.valueIcon} />
                  <span>Suivi régulier</span>
                </div>
                <span className={styles.valuesSeparator}>,</span>
                <div className={styles.valueItem}>
                  <FaHandshake className={styles.valueIcon} />
                  <span>Transparence</span>
                </div>
                <span className={styles.valuesSeparator}> et </span>
                <div className={styles.valueItem}>
                  <FaChartLine className={styles.valueIcon} />
                  <span>Rentabilité</span>
                </div>
              </div>
              <span className={styles.valuesConclusion}>
                sont nos maîtres mots dans la gestion de votre bien.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.signature}>
        <p>
          Parce que votre logement mérite la meilleure mise en valeur, et parce
          que vos voyageurs méritent une expérience qui dépasse leurs attentes,
          nous mettons du cœur dans chaque détail.
        </p>
        <FaHeart className={styles.heartIcon} />
        <p>
          C'est cette attention, cette rigueur et le mélange de nos passions qui
          font la signature <strong>Effet Coup de Cœur</strong>.
        </p>
      </div>
    </div>
    // </div>
  );
}
