import React, { memo } from "react";
import clsx from "clsx";

import styles from "./Hamburger.module.css";
import { HamburgerProps } from "./interfaces";

const Hamburger = memo(function Hamburger({
  isOpen,
  toggleOpen,
}: HamburgerProps) {
  return (
    <div
      data-testid="hamburger"
      data-cy="hamburger"
      className={styles["Hamburger"]}
      onClick={toggleOpen}
    >
      <span
        data-testid="hamburger-first-burger"
        className={clsx(styles["Hamburger__Burger"], {
          [styles["Hamburger__Burger--first"]]: isOpen,
        })}
      />
      <span
        data-testid="hamburger-second-burger"
        className={clsx(styles["Hamburger__Burger"], {
          [styles["Hamburger__Burger--second"]]: isOpen,
        })}
      />
      <span
        data-testid="hamburger-third-burger"
        className={clsx(styles["Hamburger__Burger"], {
          [styles["Hamburger__Burger--third"]]: isOpen,
        })}
      />
    </div>
  );
});

export default Hamburger;
