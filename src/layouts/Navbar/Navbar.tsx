import NavItem from "./NavItem";

interface NavItemConfig {
  label: string;
  path: string;
}

const NAVBAR_CONFIGS: NavItemConfig[] = [
  {
    label: "Accueil",
    path: "/",
  },
  {
    label: "A propos",
    path: "/a-propos",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Logements",
    path: "/logements",
  },
  {
    label: "Services",
    path: "/services",
  },
];

export default function Navbar() {
  return (
    <nav>
      <ul>
        {NAVBAR_CONFIGS.map((item) => (
          <NavItem key={item.path} {...item} />
        ))}
      </ul>
    </nav>
  );
}
