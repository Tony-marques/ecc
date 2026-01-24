import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import NavItem from "./NavItem";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";

interface NavItemConfig {
  label: string;
  path: string;
  className?: string;
}

export default function Navbar() {
  const { t } = useTranslation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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

  return (
    <nav
      className={`${styles.navbar} ${isVisible ? styles.visible : styles.hidden}`}
    >
      <img src={logo} alt="logo" id="logo" />
      <ul>
        {NAVBAR_CONFIGS.map((item) => (
          <NavItem key={item.path} {...item} />
        ))}
      </ul>
      <LanguageSwitcher />
    </nav>
  );
}
