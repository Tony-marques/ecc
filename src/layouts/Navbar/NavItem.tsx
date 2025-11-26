import { NavLink } from "react-router-dom";

interface NavItemProps {
  label: string;
  path: string;
}

export default function NavItem({ label, path }: NavItemProps) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        {label}
      </NavLink>
    </li>
  );
}
