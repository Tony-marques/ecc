import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import NavItem from "./NavItem";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.webp";

interface NavItemConfig {
  label: string;
  path: string;
  className?: string;
}

export default function Navbar() {
  const { t } = useTranslation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAVBAR_CONFIGS: NavItemConfig[] = [
    {
      label: t("nav.home"),
      path: "/",
    },
    {
      label: t("nav.about"),
      path: "notre-equipe",
    },
    {
      label: t("nav.contact"),
      path: "contactez-nous",
    },
    {
      label: t("nav.services"),
      path: "nos-services",
    },
    {
      label: t("nav.properties"),
      path: "consultez-nos-biens",
      className: "biens",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 500) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <img
        src={logo}
        alt="Logo Effet Coup de Cœur - Conciergerie Tours (37)"
        id="logo"
        decoding="async"
        fetchPriority="high"
      />
      <button
        className={styles["menu-toggle"]}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        {NAVBAR_CONFIGS.map((item) => (
          <NavItem key={item.path} {...item} onToggle={toggleMenu} />
        ))}
      </ul>
      <LanguageSwitcher />
    </nav>
  );
}
