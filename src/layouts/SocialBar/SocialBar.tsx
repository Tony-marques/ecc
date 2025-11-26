import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialItem from "./SocialItem";

interface SocialItemConfig {
  label: string;
  Icon: React.ReactElement;
  href: string;
}

const SOCIALBAR_CONFIGS: SocialItemConfig[] = [
  {
    label: "facebook",
    Icon: <FaFacebook />,
    href: "https://facebook.com",
  },
  {
    label: "linkedin",
    Icon: <FaLinkedin />,
    href: "https://linkedin.com",
  },
  {
    label: "instagram",
    Icon: <FaInstagram />,
    href: "https://instagram.com",
  },
  {
    label: "contact",
    Icon: <MdEmail />,
    href: "mailto:contact@example.com",
  },
];

export default function SocialBar() {
  return (
    <nav>
      <ul>
        {SOCIALBAR_CONFIGS.map((item) => (
          <SocialItem key={item.label} {...item} />
        ))}
      </ul>
    </nav>
  );
}
