import React from "react";
import clsx from "clsx";

import diagramLogo from "@/assets/diagramLogo.png";
import Button from "@/components/ui/Button";
import Hamburger from "@/components/ui/Hamburger";
import Icon from "@/components/ui/Icon";
import NavMenu from "@/components/ui/NavMenu";
import { NAV_MENU_ITEMS } from "@/constants/navMenuItems";
import useBooleanToggle from "@/hooks/useBooleanToggle";

import styles from "./Header.module.css";

function Header() {
  const [isOpen, toggleIsOpen] = useBooleanToggle();

  return (
    <header className={styles["Header"]}>
      <div className={styles["Header__Burger"]}>
        <Icon width={36} height={36} iconSrc={diagramLogo} />
        <div className={styles["Header__BurgerWrapper"]}>
          <Hamburger isOpen={isOpen} toggleOpen={toggleIsOpen} />
        </div>
      </div>
      <div
        className={clsx(styles["Header__Content"], {
          [styles["Header__Content--visible"]]: isOpen,
        })}
      >
        <NavMenu
          navClass={styles["Navigation"]}
          linkClass={styles["Link"]}
          menu={NAV_MENU_ITEMS}
        />
        <Button>Change theme</Button>
      </div>
    </header>
  );
}

export default Header;
