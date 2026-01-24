import { useTranslation } from "react-i18next";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.langButton} ${i18n.language === "fr" ? styles.active : ""}`}
        onClick={() => handleLanguageChange("fr")}
        title="Français"
      >
        FR
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.langButton} ${i18n.language === "en" ? styles.active : ""}`}
        onClick={() => handleLanguageChange("en")}
        title="English"
      >
        EN
      </button>
    </div>
  );
}
