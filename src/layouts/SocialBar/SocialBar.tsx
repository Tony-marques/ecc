import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialItem from "./SocialItem";
import styles from "./SocialBar.module.css";
import itemStyles from "./SocialItem.module.css";

interface SocialItemConfig {
  label: string;
  Icon: React.ReactElement;
  href: string;
}

const SOCIALBAR_CONFIGS: SocialItemConfig[] = [
  {
    label: "facebook",
    Icon: <FaFacebook />,
    href: "https://www.facebook.com/profile.php?id=61584790737384#",
  },
  {
    label: "instagram",
    Icon: <FaInstagram />,
    href: "https://www.instagram.com/ecdc_conciergerie/?igsh=MXVlcTEyZG5zcWh1NA%3D%3D#",
  },
  {
    label: "contact",
    Icon: <MdEmail />,
    href: "contactez-nous",
  },
];

export default function SocialBar() {
  return (
    <div className={styles.socialBar}>
      <ul>
        {SOCIALBAR_CONFIGS.map((item) => (
          <li key={item.label} className={itemStyles.socialItem}>
            <SocialItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
