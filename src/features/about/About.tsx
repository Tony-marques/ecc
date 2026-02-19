import { useTranslation } from "react-i18next";
// import equipeImage from "../../assets/images/equipe.jpg";
import equipeImage from "../../assets/images/equipe-3.png";
import styles from "./About.module.css";
import { ScrollAnimation } from "../../components/ScrollAnimation/ScrollAnimation";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className={styles["team-section"]} id="notre-equipe">
      <div className={styles["team-container"]}>
        <ScrollAnimation type="fadeInUp">
          <header className={styles["team-header"]}>
            <h2>{t("about.teamHeading")}</h2>
            <p className={styles["team-intro"]}>{t("about.teamTagline")}</p>
            <div className={styles["header-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
          </header>
        </ScrollAnimation>

        <div className={styles["team-content"]}>
          <ScrollAnimation type="fadeInLeft" delay={100}>
            <div className={styles["team-profile"]}>
              <h3>{t("about.remi")}</h3>
              <span className={styles["team-title"]}>
                {t("about.remiTitle")}
              </span>
              <div className={styles["profile-divider"]}>
                <span></span>
                <span className={styles["divider-dot"]}></span>
                <span></span>
              </div>
              <p>{t("about.remiDesc")}</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="scaleIn" delay={200}>
            <div className={styles["team-portrait"]}>
              <img src={equipeImage} alt={t("about.portraitAlt")} />
              <span className={styles["team-role"]}>
                {t("about.foundersConciergies")}
              </span>
            </div>
          </ScrollAnimation>

          <ScrollAnimation type="fadeInRight" delay={100}>
            <div className={styles["team-profile"]}>
              <h3>{t("about.laura")}</h3>
              <span className={styles["team-title"]}>
                {t("about.lauraTitle")}
              </span>
              <div className={styles["profile-divider"]}>
                <span></span>
                <span className={styles["divider-dot"]}></span>
                <span></span>
              </div>
              <p>{t("about.lauraDesc")}</p>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation type="fadeInUp" delay={300}>
          <div className={styles["team-signature"]}>
            <span></span>
            <em>{t("about.teamSignature")}</em>
            <span></span>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
