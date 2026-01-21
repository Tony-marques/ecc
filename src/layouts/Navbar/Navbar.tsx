import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.png";

interface NavItemConfig {
  label: string;
  path: string;
  className?: string;
}

const NAVBAR_CONFIGS: NavItemConfig[] = [
  {
    label: "Accueil",
    path: "/",
  },
  {
    label: "Qui sommes-nous ?",
    path: "qui-sommes-nous",
  },
  {
    label: "Contactez-nous",
    path: "contactez-nous",
  },
  {
    label: "Nos services",
    path: "nos-services",
  },
  {
    label: "Consultez nos biens",
    path: "consultez-nos-biens",
    className: "biens",
  },
];

export default function Navbar() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    </nav>
  );
}
