import React, { memo } from "react";
import { Link } from "react-router-dom";

import { NavMenuProps } from "./interfaces";

const NavMenu = memo(function NavMenu({
  menu,
  navClass,
  linkClass,
}: NavMenuProps) {
  return (
    <nav data-testid="nav-menu" className={navClass}>
      {menu.map((item) => (
        <Link key={item.to} className={linkClass} to={item.to}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
});

export default NavMenu;
