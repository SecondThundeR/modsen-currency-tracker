import React from "react";

import diagramLogo from "@/assets/diagramLogo.png";
import Icon from "@/components/ui/Icon";

import styles from "./HeroBlock.module.css";

function HeroBlock() {
  return (
    <div data-cy="hero-block" className={styles["HeroBlock"]}>
      <div className={styles["HeroBlock__Company"]}>
        <h1>Modsen Currency Tracker</h1>
        <p>Quotes for the dollar and other international currencies.</p>
      </div>
      <Icon
        width={184}
        height={184}
        src={diagramLogo}
        title="Company Logo"
        alt="Company Logo"
      />
    </div>
  );
}

export default HeroBlock;
