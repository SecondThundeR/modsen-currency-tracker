import React, { memo } from "react";
import clsx from "clsx";

import diagramLogo from "@/assets/diagramLogo.png";
import Button from "@/components/ui/Button";
import Hamburger from "@/components/ui/Hamburger";
import Icon from "@/components/ui/Icon";
import NavMenu from "@/components/ui/NavMenu";
import { NAV_MENU_ITEMS } from "@/constants/navMenuItems";
import useBooleanToggle from "@/hooks/useBooleanToggle";

import styles from "./Header.module.css";
import { HeaderProps } from "./interfaces";

const Header = memo(function Header({ onThemeChange }: HeaderProps) {
  const [isOpen, toggleIsOpen] = useBooleanToggle();

  return (
    <header data-cy="header" data-testid="header" className={styles["Header"]}>
      <div className={styles["Header__Burger"]}>
        <Icon
          width={36}
          height={36}
          src={diagramLogo}
          title="Company Logo"
          alt="Company Logo"
        />
        <div className={styles["Header__BurgerWrapper"]}>
          <Hamburger isOpen={isOpen} toggleOpen={toggleIsOpen} />
        </div>
      </div>
      <div
        data-cy="header-content"
        className={clsx(styles["Header__Content"], {
          [styles["Header__Content--visible"]]: isOpen,
        })}
      >
        <NavMenu
          navClass={styles["Navigation"]}
          linkClass={styles["Link"]}
          menu={NAV_MENU_ITEMS}
        />
        <Button onClick={onThemeChange}>Change theme</Button>
      </div>
    </header>
  );
});

export default Header;
