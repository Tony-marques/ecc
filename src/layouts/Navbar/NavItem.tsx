import { NavLink } from "react-router-dom";
import styles from "./NavItem.module.css";

interface NavItemProps {
  label: string;
  path: string;
  className?: string;
}

export default function NavItem({ label, path, className }: NavItemProps) {
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
