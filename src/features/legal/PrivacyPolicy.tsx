import { useTranslation } from "react-i18next";
import styles from "./PrivacyPolicy.module.css";
import { usePageMeta } from "../../hooks/usePageMeta";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  usePageMeta("privacyPolicy");

  return (
    <main className={styles.privacyPolicy}>
      <div className={styles.container}>
        <h1>{t("privacyPolicy.title")}</h1>
        <p className={styles.effectiveDate}>
          {t("privacyPolicy.effectiveDate")}
        </p>

        <section>
          <p>{t("privacyPolicy.intro")}</p>
        </section>

        <section>
          <h2>{t("privacyPolicy.section1Title")}</h2>
          <p>{t("privacyPolicy.section1Intro")}</p>
          <ul>
            <li>{t("privacyPolicy.section1Item1")}</li>
            <li>{t("privacyPolicy.section1Item2")}</li>
            <li>{t("privacyPolicy.section1Item3")}</li>
            <li>{t("privacyPolicy.section1Item4")}</li>
            <li>{t("privacyPolicy.section1Item5")}</li>
          </ul>
        </section>

        <section>
          <h2>{t("privacyPolicy.section2Title")}</h2>
          <p>{t("privacyPolicy.section2Text")}</p>
        </section>

        <section>
          <h2>{t("privacyPolicy.section3Title")}</h2>
          <p>{t("privacyPolicy.section3Intro")}</p>
          <div className={styles.infoParagraph}>
            <strong>SAS Effet Coup de Cœur – Conciergerie</strong>
            <br />
            {t("privacyPolicy.section3Status")}
            <br />
            {t("privacyPolicy.section3Registry")}
            <br />
            {t("privacyPolicy.section3Address")}
          </div>
        </section>

        <section>
          <h2>{t("privacyPolicy.section4Title")}</h2>
          <p>{t("privacyPolicy.section4Intro")}</p>
          <ul>
            <li>{t("privacyPolicy.section4Item1")}</li>
            <li>{t("privacyPolicy.section4Item2")}</li>
            <li>{t("privacyPolicy.section4Item3")}</li>
            <li>{t("privacyPolicy.section4Item4")}</li>
          </ul>
          <p>{t("privacyPolicy.section4Text1")}</p>
          <p>
            {t("privacyPolicy.section4Text2")}{" "}
            <a href="mailto:ecdconciergerie@gmail.com">
              ecdconciergerie@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>{t("privacyPolicy.section5Title")}</h2>
          <p>{t("privacyPolicy.section5Intro")}</p>
          <ul>
            <li>{t("privacyPolicy.section5Right1")}</li>
            <li>{t("privacyPolicy.section5Right2")}</li>
            <li>{t("privacyPolicy.section5Right3")}</li>
            <li>{t("privacyPolicy.section5Right4")}</li>
          </ul>
          <p>
            {t("privacyPolicy.section5Text")}{" "}
            <a href="mailto:ecdconciergerie@gmail.com">
              ecdconciergerie@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>{t("privacyPolicy.section6Title")}</h2>
          <div className={styles.subSection}>
            <h3>{t("privacyPolicy.section6Sub1Title")}</h3>
            <p>{t("privacyPolicy.section6Sub1Text")}</p>
          </div>
          <div className={styles.subSection}>
            <h3>{t("privacyPolicy.section6Sub2Title")}</h3>
            <ul>
              <li>{t("privacyPolicy.section6Sub2Item1")}</li>
              <li>{t("privacyPolicy.section6Sub2Item2")}</li>
            </ul>
            <p>{t("privacyPolicy.section6Sub2Text")}</p>
          </div>
          <div className={styles.subSection}>
            <h3>{t("privacyPolicy.section6Sub3Title")}</h3>
            <p>{t("privacyPolicy.section6Sub3Text")}</p>
          </div>
          <div className={styles.subSection}>
            <h3>{t("privacyPolicy.section6Sub4Title")}</h3>
            <p>{t("privacyPolicy.section6Sub4Text")}</p>
          </div>
        </section>

        <section>
          <h2>{t("privacyPolicy.section7Title")}</h2>
          <p>{t("privacyPolicy.section7Text")}</p>
        </section>

        <section>
          <h2>{t("privacyPolicy.section8Title")}</h2>
          <p>{t("privacyPolicy.section8Intro")}</p>
          <ul>
            <li>{t("privacyPolicy.section8Item1")}</li>
            <li>{t("privacyPolicy.section8Item2")}</li>
          </ul>
          <p>{t("privacyPolicy.section8Text1")}</p>
          <p>{t("privacyPolicy.section8Text2")}</p>
        </section>

        <section>
          <h2>{t("privacyPolicy.section9Title")}</h2>
          <p>
            {t("privacyPolicy.section9Text1")}{" "}
            <a href="mailto:ecdconciergerie@gmail.com">
              ecdconciergerie@gmail.com
            </a>{" "}
            {t("privacyPolicy.section9Text2")}
          </p>
          <p>{t("privacyPolicy.section9Text3")}</p>
          <p>{t("privacyPolicy.section9Text4")}</p>
          <p>{t("privacyPolicy.section9Text5")}</p>
          <ul>
            <li>{t("privacyPolicy.section9Item1")}</li>
            <li>{t("privacyPolicy.section9Item2")}</li>
          </ul>
          <p>{t("privacyPolicy.section9Text6")}</p>
        </section>
      </div>
    </main>
  );
}
