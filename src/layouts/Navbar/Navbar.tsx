import NavItem from "./NavItem";
import styles from "./Navbar.module.css";

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
    label: "A propos",
    path: "/a-propos",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Consultez nos biens",
    path: "#biens",
    className: "biens",
  },
];

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src="/logo.png" alt="logo" />
      <ul>
        {NAVBAR_CONFIGS.map((item) => (
          <NavItem key={item.path} {...item} />
        ))}
      </ul>
    </nav>
  );
}
