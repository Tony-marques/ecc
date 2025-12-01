import { Link } from "react-scroll";
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
      <a href="/">
        <Link to={path} smooth={true} duration={500} spy={true} offset={-100}>
          {label}
        </Link>
      </a>
    </li>
  );
}
