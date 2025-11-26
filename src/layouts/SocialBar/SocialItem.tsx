interface SocialItemProps {
  label: string;
  Icon: React.ReactElement;
  href: string;
}

export default function SocialItem({ label, Icon, href }: SocialItemProps) {
  return (
    <li>
      <a href={href} aria-label={label}>
        {Icon}
      </a>
    </li>
  );
}
