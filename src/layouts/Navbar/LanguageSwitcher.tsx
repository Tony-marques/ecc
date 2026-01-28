import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./LanguageSwitcher.module.css";
import { PAGE_METAS } from "../../config/seoMeta";

const getPathMappings = () => {
  const mappings: Record<string, { fr: string; en: string }> = {};

  Object.values(PAGE_METAS).forEach((meta) => {
    if (meta.pathFr && meta.pathEn) {
      mappings[meta.pathFr] = { fr: meta.pathFr, en: meta.pathEn };
      mappings[meta.pathEn] = { fr: meta.pathFr, en: meta.pathEn };
    }
  });

  return mappings;
};

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const mapPath = (pathname: string, targetLang: string) => {
    const mappings = getPathMappings();
    const match = mappings[pathname];
    if (!match) return pathname;
    return targetLang === "fr" ? match.fr : match.en;
  };

  const handleLanguageChange = async (lang: string) => {
    if (lang === i18n.language) return;
    const { pathname, search, hash } = location;
    console.log(pathname);

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
        aria-label="Passer en français"
      >
        FR
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.langButton} ${i18n.language === "en" ? styles.active : ""}`}
        onClick={() => handleLanguageChange("en")}
        title="English"
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
