import React from "react";
import { Link } from "react-router-dom";

import diagramLogo from "@/assets/diagramLogo.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles["Header"]}>
      <img width={36} height={36} src={diagramLogo} />
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
