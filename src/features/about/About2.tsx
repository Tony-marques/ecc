// import equipeImage from "../../assets/images/equipe.jpg";
import equipeImage from "../../assets/images/equipe-2.png";

export default function About() {
  // <div className={styles.about} id="qui-sommes-nous">
  //   <div className={styles.container}>
  //     <div className={styles.header}>
  //       <h1>{t("about.title")}</h1>
  //       <p className={styles.intro}>{t("about.intro")}</p>
  //     </div>

  //     <div className={styles.teamSection}>
  //       <p className={styles.teamIntro}>{t("about.teamIntro")}</p>

  //       <h2 className={styles.teamHeading}>{t("about.teamHeading")}</h2>

  //       <div className={styles.teamPresentation}>
  //         <div className={styles.memberColumn}>
  //           <div className={styles.member}>
  //             <h3>{t("about.remi")}</h3>
  //             <p>{t("about.remiDesc")}</p>
  //           </div>
  //         </div>

  //         <div className={styles.teamImageContainer}>
  //           <img
  //             src={equipeImage}
  //             alt="Laura et Rémi - Équipe Effet Coup de Cœur"
  //             className={styles.teamImage}
  //           />
  //           <span className="team-role">Fondateurs & Concierges</span>
  //         </div>

  //         <div className={styles.memberColumn}>
  //           <div className={styles.member}>
  //             <h3>{t("about.laura")}</h3>
  //             <p>{t("about.lauraDesc")}</p>
  //           </div>
  //         </div>
  //       </div>

  //       <div className={styles.teamDescription}>
  //         <p>{t("about.teamDescription1")}</p>
  //         <p>{t("about.teamDescription2")}</p>
  //       </div>
  //     </div>
  //   </div>

  //   <div className={styles.servicesSection}>
  //     <div className={styles.serviceBlock}>
  //       <div className={styles.serviceHeader}>
  //         <FaPlane className={styles.serviceIcon} />
  //         <h2>{t("about.forTravelers")}</h2>
  //       </div>
  //       <div className={styles.serviceContent}>
  //         <p className={styles.serviceMission}>{t("about.mission")}</p>
  //         <p>{t("about.travelers")}</p>
  //       </div>
  //     </div>

  //     <div className={styles.serviceBlock}>
  //       <div className={styles.serviceHeader}>
  //         <MdHomeWork className={styles.serviceIcon} />
  //         <h2>{t("about.forOwners")}</h2>
  //       </div>
  //       <div className={styles.serviceContent}>
  //         <p>{t("about.ownersDesc")}</p>
  //         <div className={styles.values}>
  //           <div className={styles.valuesList}>
  //             <div className={styles.valueItem}>
  //               <FaShieldAlt className={styles.valueIcon} />
  //               <span>{t("about.regularFollow")}</span>
  //             </div>
  //             <span className={styles.valuesSeparator}>,</span>
  //             <div className={styles.valueItem}>
  //               <FaHandshake className={styles.valueIcon} />
  //               <span>{t("about.transparency")}</span>
  //             </div>
  //             <span className={styles.valuesSeparator}> et </span>
  //             <div className={styles.valueItem}>
  //               <FaChartLine className={styles.valueIcon} />
  //               <span>{t("about.profitability")}</span>
  //             </div>
  //           </div>
  //           <span className={styles.valuesConclusion}>
  //             {t("about.valuesConclusion")}
  //           </span>
  //         </div>
  //       </div>
  //     </div>
  //   </div>

  //   <div className={styles.signature}>
  //     <p>{t("about.signature")}</p>
  //     <FaHeart className={styles.heartIcon} />
  //     <p>{t("about.signature2")}</p>
  //   </div>
  // </div>
  return (
    <section className="team-section">
      <div className="team-container">
        <header className="team-header">
          <h2>Notre équipe</h2>
          <p className="team-intro">
            Deux regards complémentaires, une même exigence d’excellence.
          </p>
        </header>

        <div className="team-portrait">
          <img
            src={equipeImage}
            alt="Rémi et Laura – Fondateurs Effet Coup de Cœur"
          />
          <span className="team-role">Fondateurs & Concierges</span>
        </div>

        <div className="team-profiles">
          <div className="team-profile">
            <h3>Rémi</h3>
            <span className="team-title">
              Co-fondateur – Immobilier & valorisation
            </span>
            <p>
              Amoureux de l’immobilier, Rémi accorde une attention particulière
              à la valorisation des biens, à la qualité des espaces et au soin
              apporté à chaque logement. Sa vision : révéler le potentiel de
              chaque lieu avec exigence et cohérence.
            </p>
          </div>

          <div className="team-profile">
            <h3>Laura</h3>
            <span className="team-title">
              Co-fondatrice – Expérience & hospitalité
            </span>
            <p>
              Passionnée de tourisme et d’hospitalité, Laura connaît les
              attentes des voyageurs et l’importance des détails. Elle veille à
              transformer chaque séjour en une expérience fluide, chaleureuse et
              mémorable.
            </p>
          </div>
        </div>

        <div className="team-signature">
          <span></span>
          <em>L’élégance d’un lieu, la sérénité d’un service.</em>
          <span></span>
        </div>
      </div>
    </section>
  );
}
