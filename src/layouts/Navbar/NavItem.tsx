import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import styles from "./NavItem.module.css";

interface NavItemProps {
  label: string;
  path: string;
  className?: string;
  onToggle?: () => void;
}

export default function NavItem({
  label,
  path,
  className,
  onToggle,
}: NavItemProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const targetId = path.startsWith("/") ? path.slice(1) : path;
  const linkClass =
    className === "biens" ? `${styles.link} ${styles.biensLink}` : styles.link;

  const renderLink = () => {
    if (path === "/") {
      return (
        <RouterLink className={linkClass} to="/" onClick={onToggle}>
          {label}
        </RouterLink>
      );
    }

    if (isHome) {
      return (
        <ScrollLink
          onClick={onToggle}
          className={linkClass}
          to={targetId}
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
        >
          {label}
        </ScrollLink>
      );
    }

    return (
      <RouterLink className={linkClass} to={`/#${targetId}`} onClick={onToggle}>
        {label}
      </RouterLink>
    );
  };

  return (
    <li
      className={
        className === "biens"
          ? `${styles.navItem} ${styles.biens}`
          : styles.navItem
      }
    >
      {renderLink()}
    </li>
  );
}
