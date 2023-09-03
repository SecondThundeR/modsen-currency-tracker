import React from "react";

import diagramLogo from "@/assets/diagramLogo.png";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import NavMenu from "@/components/ui/NavMenu";
import { NAV_MENU_ITEMS } from "@/constants/navMenuItems";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["Header"]}>
      <Icon width={36} height={36} iconSrc={diagramLogo} />
      <NavMenu
        navClass={styles["Navigation"]}
        linkClass={styles["Link"]}
        menu={NAV_MENU_ITEMS}
      />
      <Button>Change theme</Button>
    </header>
  );
}

export default Header;
