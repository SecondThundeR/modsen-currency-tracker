import React, { memo } from "react";
import clsx from "clsx";

import styles from "./Hamburger.module.css";

interface HamburgerProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const Hamburger = memo(function Hamburger({
  isOpen,
  toggleOpen,
}: HamburgerProps) {
  return (
    <div
      data-cy="hamburger"
      className={styles["Hamburger"]}
      onClick={toggleOpen}
    >
      <span
        className={clsx(styles["Hamburger__Burger"], {
          [styles["Hamburger__Burger--first"]]: isOpen,
        })}
      />
      <span
        className={clsx(styles["Hamburger__Burger"], {
          [styles["Hamburger__Burger--second"]]: isOpen,
        })}
      />
      <span
        className={clsx(styles["Hamburger__Burger"], {
          [styles["Hamburger__Burger--third"]]: isOpen,
        })}
      />
    </div>
  );
});

export default Hamburger;
