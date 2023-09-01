import React from "react";
import { Link } from "react-router-dom";

import headerLogo from "@/assets/headerLogo.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["Header"]}>
      <img src={headerLogo} />
      <nav className={styles["Navigation"]}>
        <Link className={styles["Link"]} to="/">
          Home
        </Link>
        <Link className={styles["Link"]} to="/">
          Timeline
        </Link>
        <Link className={styles["Link"]} to="/">
          Bank map
        </Link>
        <Link className={styles["Link"]} to="/">
          Contact
        </Link>
      </nav>
      <button className={styles["Button"]}>Change theme</button>
    </header>
  );
}

export default Header;
