import { useTranslation } from "react-i18next";
import { usePageMeta } from "../../hooks/usePageMeta";
import { useEffect } from "react";
import styles from "./FAQ.module.css";
import { ScrollAnimation } from "../../components/ScrollAnimation/ScrollAnimation";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const { t } = useTranslation();

  usePageMeta("faq");

  // Generate FAQ Schema.org structured data
  useEffect(() => {
    const faqItems: FAQItem[] = [
      {
        question: t("faq.q1.question"),
        answer: t("faq.q1.answer"),
      },
      {
        question: t("faq.q2.question"),
        answer: t("faq.q2.answer"),
      },
      {
        question: t("faq.q3.question"),
        answer: t("faq.q3.answer"),
      },
      {
        question: t("faq.q4.question"),
        answer: t("faq.q4.answer"),
      },
      {
        question: t("faq.q5.question"),
        answer: t("faq.q5.answer"),
      },
      {
        question: t("faq.q6.question"),
        answer: t("faq.q6.answer"),
      },
      {
        question: t("faq.q7.question"),
        answer: t("faq.q7.answer"),
      },
      {
        question: t("faq.q8.question"),
        answer: t("faq.q8.answer"),
      },
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [t]);

  return (
    <main className={styles.faqPage}>
      <div className={styles.faqContainer}>
        <ScrollAnimation type="fadeInUp">
          <header className={styles.faqHeader}>
            <h1>{t("faq.title")}</h1>
            <p className={styles.subtitle}>{t("faq.subtitle")}</p>
            <div className={styles.headerDivider}>
              <span></span>
              <span className={styles.dividerDot}></span>
              <span></span>
            </div>
          </header>
        </ScrollAnimation>

        <div className={styles.faqContent}>
          {/* Conciergerie générale */}
          <ScrollAnimation type="fadeInUp" delay={100}>
            <section className={styles.faqSection}>
              <h2 className={styles.sectionTitle}>{t("faq.section1Title")}</h2>

              <div className={styles.faqItem}>
                <h3 className={styles.question}>{t("faq.q1.question")}</h3>
                <p className={styles.answer}>{t("faq.q1.answer")}</p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.question}>{t("faq.q2.question")}</h3>
                <p className={styles.answer}>{t("faq.q2.answer")}</p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.question}>{t("faq.q3.question")}</h3>
                <p className={styles.answer}>{t("faq.q3.answer")}</p>
              </div>
            </section>
          </ScrollAnimation>

          {/* Tarifs et commissions */}
          <ScrollAnimation type="fadeInUp" delay={150}>
            <section className={styles.faqSection}>
              <h2 className={styles.sectionTitle}>{t("faq.section2Title")}</h2>

              <div className={styles.faqItem}>
                <h3 className={styles.question}>{t("faq.q4.question")}</h3>
                <p className={styles.answer}>{t("faq.q4.answer")}</p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.question}>{t("faq.q5.question")}</h3>
                <p className={styles.answer}>{t("faq.q5.answer")}</p>
              </div>
            </section>
          </ScrollAnimation>

          {/* Gestion et services */}
          <ScrollAnimation type="fadeInUp" delay={200}>
            <section className={styles.faqSection}>
              <h2 className={styles.sectionTitle}>{t("faq.section3Title")}</h2>

              <div className={styles.faqItem}>
                <h3 className={styles.question}>{t("faq.q6.question")}</h3>
                <p className={styles.answer}>{t("faq.q6.answer")}</p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.question}>{t("faq.q7.question")}</h3>
                <p className={styles.answer}>{t("faq.q7.answer")}</p>
              </div>

              <div className={styles.faqItem}>
                <h3 className={styles.question}>{t("faq.q8.question")}</h3>
                <p className={styles.answer}>{t("faq.q8.answer")}</p>
              </div>
            </section>
          </ScrollAnimation>

          {/* CTA */}
          <ScrollAnimation type="scaleIn" delay={300}>
            <div className={styles.faqCta}>
              <p>{t("faq.ctaText")}</p>
              <a href="/#contactez-nous" className={styles.ctaButton}>
                {t("faq.ctaButton")}
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </main>
  );
}
