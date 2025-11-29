import styles from "./SocialItem.module.css";

interface SocialItemProps {
  label: string;
  Icon: React.ReactElement;
  href: string;
}

export default function SocialItem({ label, Icon, href }: SocialItemProps) {
  return (
    <li className={styles.socialItem}>
      <a href={href} aria-label={label}>
        {Icon}
      </a>
    </li>
  );
}
