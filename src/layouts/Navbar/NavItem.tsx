import { Link as RouterLink } from "react-router-dom";
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
  const linkClass =
    className === "biens" ? `${styles.link} ${styles.biensLink}` : styles.link;

  const handleClick = () => {
    if (onToggle) {
      onToggle();
    }
  };

  const renderLink = () => {
    return (
      <RouterLink className={linkClass} to={path} onClick={handleClick}>
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
