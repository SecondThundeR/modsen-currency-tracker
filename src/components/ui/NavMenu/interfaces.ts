interface NavMenuItem {
  name: string;
  to: string;
}

export interface NavMenuProps {
  menu: NavMenuItem[];
  navClass?: string;
  linkClass?: string;
}
