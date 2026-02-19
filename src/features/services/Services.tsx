import { useTranslation } from "react-i18next";
import {
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
  FiSliders,
} from "react-icons/fi";
import { FaCoins } from "react-icons/fa";
import { FaHouseFloodWater } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import styles from "./Services.module.css";
import { ScrollAnimation } from "../../components/ScrollAnimation/ScrollAnimation";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className={styles["services-section"]} id="nos-services">
      <div className={styles["services-container"]}>
        <ScrollAnimation type="fadeInUp">
          <header className={styles["services-header"]}>
            <h2>{t("services.title")}</h2>
            <p className={styles["services-subtitle"]}>
              {t("services.subtitle")}
            </p>
            <div className={styles["header-divider"]}>
              <span></span>
              <span className={styles["divider-dot"]}></span>
              <span></span>
            </div>
          </header>
        </ScrollAnimation>

        <div className={styles["services-content"]}>
          <div className={styles["services-left-column"]}>
            {/* Valorisation */}
            <ScrollAnimation type="fadeInLeft" delay={100}>
              <div className={styles["service-card"]}>
                <h3>
                  <FiTrendingUp
                    style={{
                      display: "inline",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  {t("services.valorization.title")}
                </h3>
                <div className={styles["service-divider"]}>
                  <span></span>
                  <span className={styles["divider-dot"]}></span>
                  <span></span>
                </div>
                <ul>
                  <li>{t("services.valorization.point1")}</li>
                  <li>{t("services.valorization.point2")}</li>
                  <li>{t("services.valorization.point3")}</li>
                </ul>
              </div>
            </ScrollAnimation>

            {/* Accueil et suivi */}
            <ScrollAnimation type="fadeInLeft" delay={150}>
              <div className={styles["service-card"]}>
                <h3>
                  <FiUsers
                    style={{
                      display: "inline",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  {t("services.welcome.title")}
                </h3>
                <div className={styles["service-divider"]}>
                  <span></span>
                  <span className={styles["divider-dot"]}></span>
                  <span></span>
                </div>
                <ul>
                  <li>{t("services.welcome.point1")}</li>
                  <li>{t("services.welcome.point2")}</li>
                  <li>{t("services.welcome.point3")}</li>
                </ul>
              </div>
            </ScrollAnimation>

            {/* Suivi quotidien */}
            <ScrollAnimation type="fadeInLeft" delay={200}>
              <div className={styles["service-card"]}>
                <h3>
                  <FiCheckCircle
                    style={{
                      display: "inline",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  {t("services.dailyFollowUp.title")}
                </h3>
                <div className={styles["service-divider"]}>
                  <span></span>
                  <span className={styles["divider-dot"]}></span>
                  <span></span>
                </div>
                <ul>
                  <li>{t("services.dailyFollowUp.point1")}</li>
                  <li>{t("services.dailyFollowUp.point2")}</li>
                  <li>{t("services.dailyFollowUp.point3")}</li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>

          <div className={styles["services-right-column"]}>
            {/* Frais de lancement */}
            <ScrollAnimation type="fadeInRight" delay={100}>
              <div className={styles["service-card"]}>
                <h3>
                  <GoShieldCheck
                    style={{
                      display: "inline",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                    size={24}
                  />{" "}
                  {t("services.launchFees.title")}
                </h3>
                <div className={styles["service-divider"]}>
                  <span></span>
                  <span className={styles["divider-dot"]}></span>
                  <span></span>
                </div>
                <p>{t("services.launchFees.intro")}</p>
                <ul>
                  <li>{t("services.launchFees.point1")}</li>
                  <li>{t("services.launchFees.point2")}</li>
                  <li>{t("services.launchFees.point3")}</li>
                  <li>{t("services.launchFees.point4")}</li>
                  <li>{t("services.launchFees.point5")}</li>
                  <li>{t("services.launchFees.point6")}</li>
                  <li>{t("services.launchFees.point7")}</li>
                </ul>
              </div>
            </ScrollAnimation>

            {/* Tarifs */}
            <ScrollAnimation type="fadeInRight" delay={150}>
              <div className={styles["service-card"]}>
                <h3>
                  <FaCoins
                    style={{
                      display: "inline",
                      marginRight: "8px",
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  {t("services.pricing.title")}
                </h3>
                <div className={styles["service-divider"]}>
                  <span></span>
                  <span className={styles["divider-dot"]}></span>
                  <span></span>
                </div>
                <p>{t("services.pricing.content")}</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        <ScrollAnimation type="fadeInUp" delay={300}>
          <div className={styles["services-group"]}>
            <div className={styles["complementary-signature"]}>
              <span></span>
              <em>{t("services.complementary.title")}</em>
              <span></span>
            </div>

            <div
              className={`${styles["services-content"]} ${styles["complementary-content"]}`}
            >
              {/* Résidence secondaire */}
              <ScrollAnimation type="fadeInLeft" delay={100}>
                <div className={styles["service-card"]}>
                  <h3>
                    <FaHouseFloodWater
                      style={{
                        display: "inline",
                        marginRight: "8px",
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    {t("services.secondaryResidence.title")}
                  </h3>
                  <div className={styles["service-divider"]}>
                    <span></span>
                    <span className={styles["divider-dot"]}></span>
                    <span></span>
                  </div>
                  <ul>
                    <li>{t("services.secondaryResidence.point1")}</li>
                    <li>{t("services.secondaryResidence.point2")}</li>
                    <li>{t("services.secondaryResidence.point3")}</li>
                    <li>{t("services.secondaryResidence.point4")}</li>
                    <li>{t("services.secondaryResidence.point5")}</li>
                    <li>{t("services.secondaryResidence.point6")}</li>
                    <li>{t("services.secondaryResidence.point7")}</li>
                  </ul>
                  <p className={styles["service-note"]}>
                    {t("services.secondaryResidence.note")}
                  </p>
                </div>
              </ScrollAnimation>

              {/* Services sur mesure */}
              <ScrollAnimation type="fadeInRight" delay={100}>
                <div className={styles["service-card"]}>
                  <h3>
                    <FiSliders
                      style={{
                        display: "inline",
                        marginRight: "8px",
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    {t("services.custom.title")}
                  </h3>
                  <div className={styles["service-divider"]}>
                    <span></span>
                    <span className={styles["divider-dot"]}></span>
                    <span></span>
                  </div>
                  <p>{t("services.custom.content")}</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
