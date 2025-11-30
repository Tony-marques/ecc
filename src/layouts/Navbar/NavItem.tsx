import { NavLink, useLocation } from "react-router-dom";
import styles from "./NavItem.module.css";

interface NavItemProps {
  label: string;
  path: string;
  className?: string;
}

export default function NavItem({ label, path, className }: NavItemProps) {
  const location = useLocation();
  const isAnchor = path.startsWith("#");

  if (isAnchor) {
    return (
      <li
        className={
          className === "biens"
            ? `${styles.navItem} ${styles.biens}`
            : styles.navItem
        }
      >
        <a
          href={path}
          className={location.hash === path ? "active" : ""}
        >
          {label}
        </a>
      </li>
    );
  }

  return (
    <li
      className={
        className === "biens"
          ? `${styles.navItem} ${styles.biens}`
          : styles.navItem
      }
    >
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {label}
      </NavLink>
    </li>
  );
}
