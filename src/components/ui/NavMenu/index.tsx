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

const compareProps = (oldProps: NavMenuProps, newProps: NavMenuProps) => {
  if (
    oldProps.menu.length !== newProps.menu.length ||
    oldProps.linkClass !== newProps.linkClass ||
    oldProps.navClass !== newProps.navClass
  )
    return false;
  if (!oldProps.menu.every((item, index) => item === newProps.menu[index]))
    return false;

  return true;
};

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
}, compareProps);

export default NavMenu;
