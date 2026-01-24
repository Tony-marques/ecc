import { Link } from "react-scroll";
import styles from "./SocialItem.module.css";

interface SocialItemProps {
  label: string;
  Icon: React.ReactElement;
  href: string;
}

export default function SocialItem({ label, Icon, href }: SocialItemProps) {
  return (
    <li className={styles.socialItem}>
      {label === "contact" && (
        <Link
          to={href}
          smooth={true}
          duration={500}
          spy={true}
          offset={-100}
          role="button"
          tabIndex={0}
        >
          {Icon}
        </Link>
      )}
      {label !== "contact" && (
        <a
          href={href}
          aria-label={label}
          target="_blank"
          rel="noopener noreferrer"
        >
          {Icon}
        </a>
      )}
    </li>
  );
}
