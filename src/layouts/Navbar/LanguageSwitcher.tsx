import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const mapPath = (pathname: string, targetLang: string) => {
    const mappings = [
      { fr: "/mentions-legales", en: "/legal-notice" },
      { fr: "/politique-de-confidentialite", en: "/privacy-policy" },
    ];
    const match = mappings.find((m) => m.fr === pathname || m.en === pathname);
    if (!match) return pathname;
    return targetLang === "fr" ? match.fr : match.en;
  };

  const handleLanguageChange = async (lang: string) => {
    if (lang === i18n.language) return;
    const { pathname, search, hash } = location;
    const targetPath = mapPath(pathname, lang);
    await i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    navigate(`${targetPath}${search}${hash}`, { replace: true });
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
