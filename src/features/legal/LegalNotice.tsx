import { useTranslation } from "react-i18next";
import styles from "./LegalNotice.module.css";
import { usePageMeta } from "../../hooks/usePageMeta";

export default function LegalNotice() {
  const { t } = useTranslation();
  usePageMeta("legalNotice");

  return (
    <main className={styles.legalNotice}>
      <div className={styles.container}>
        <h1>{t("legalNotice.title")}</h1>

        <section>
          <p>{t("legalNotice.intro")}</p>
        </section>

        <section>
          <h2>{t("legalNotice.editorTitle")}</h2>
          <p>{t("legalNotice.editorIntro")}</p>
          <div className={styles.infoParagraph}>
            <strong>{t("legalNotice.companyName")}</strong>
            <br />
            {t("legalNotice.companyStatus")}
            <br />
            {t("legalNotice.companyRegistry")}
            <br />
            {t("legalNotice.companyAddress")}
            <br />
            📧 {t("legalNotice.emailLabel")}{" "}
            <a href="mailto:ecdconciergerie@gmail.com">
              ecdconciergerie@gmail.com
            </a>
            <br />
            📞 {t("legalNotice.phoneLabel")} 06 82 11 76 25 / 06 75 88 41 03
          </div>
        </section>

        <section>
          <h2>{t("legalNotice.publisherTitle")}</h2>
          <div className={styles.infoParagraph}>
            <strong>{t("legalNotice.publisherName")}</strong>
            <br />
            {t("legalNotice.publisherRole")}
          </div>
        </section>

        <section>
          <h2>{t("legalNotice.hostingTitle")}</h2>
          <p>{t("legalNotice.hostingIntro")}</p>
          <div className={styles.infoParagraph}>
            <strong>{t("legalNotice.hostName")}</strong>
            <br />
            {t("legalNotice.hostDetails")}
            <br />
            {t("legalNotice.hostSite")}
          </div>
        </section>

        <section>
          <h2>{t("legalNotice.termsTitle")}</h2>
          <p>{t("legalNotice.termsIntro1")}</p>
          <p>{t("legalNotice.termsIntro2")}</p>
          <p>{t("legalNotice.termsIntro3")}</p>
        </section>

        <section>
          <h2>{t("legalNotice.ipTitle")}</h2>
          <p>{t("legalNotice.ip1")}</p>
          <p>{t("legalNotice.ip2")}</p>
          <p>{t("legalNotice.ip3")}</p>
          <p>{t("legalNotice.ip4")}</p>
          <p>{t("legalNotice.ip5")}</p>
          <p>{t("legalNotice.ip6")}</p>
        </section>

        <section>
          <h2>{t("legalNotice.dataTitle")}</h2>
          <p>{t("legalNotice.data1")}</p>
          <p>{t("legalNotice.data2")}</p>
          <p>
            {t("legalNotice.data3")}{" "}
            <a href="mailto:ecdconciergerie@gmail.com">
              ecdconciergerie@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
