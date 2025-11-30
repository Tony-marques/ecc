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

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor) {
      e.preventDefault();
      const targetId = path.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -100;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }
  };

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
          // onClick={handleAnchorClick}
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
