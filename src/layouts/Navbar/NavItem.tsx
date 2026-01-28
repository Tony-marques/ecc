import { Link as RouterLink, useLocation } from "react-router-dom";
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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome && path !== "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      onToggle?.();
    } else if (onToggle) {
      onToggle();
    }
  };

  const renderLink = () => {
    if (path === "/") {
      return (
        <RouterLink className={linkClass} to="/" onClick={onToggle}>
          {label}
        </RouterLink>
      );
    }

    const href = isHome ? `#${targetId}` : `/#${targetId}`;

    return (
      <a className={linkClass} href={href} onClick={handleClick}>
        {label}
      </a>
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
