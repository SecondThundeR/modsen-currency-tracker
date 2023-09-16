import React, { memo } from "react";
import { Link } from "react-router-dom";

interface NavMenuItem {
  name: string;
  to: string;
}

interface NavMenuProps {
  menu: NavMenuItem[];
  navClass?: string;
  linkClass?: string;
}

const NavMenu = memo(function NavMenu({
  menu,
  navClass,
  linkClass,
}: NavMenuProps) {
  return (
    <nav className={navClass}>
      {menu.map((item) => (
        <Link key={item.to} className={linkClass} to={item.to}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
});

export default NavMenu;
