import { useLocation } from "react-router-dom";
import { Link } from "react-scroll";
import styles from "./SocialItem.module.css";

interface SocialItemProps {
  label: string;
  Icon: React.ReactElement;
  href: string;
}

export default function SocialItem({ label, Icon, href }: SocialItemProps) {
  const location = useLocation();

  console.log(location);

  return (
    <li className={styles.socialItem}>
      {label === "contact" && (
        <a href="/">
          <Link to={href} smooth={true} duration={500} spy={true} offset={-100}>
            {Icon}
          </Link>
        </a>
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
