import React, { memo } from "react";

import diagramLogo from "@/assets/diagramLogo.png";
import Icon from "@/components/Icon";

import styles from "./HeroBlock.module.css";

const HeroBlock = memo(function HeroBlock() {
  return (
    <div className={styles["HeroBlock"]}>
      <div className={styles["HeroBlock__Company"]}>
        <h1>Modsen Currency Tracker</h1>
        <p>Quotes for the dollar and other international currencies.</p>
      </div>
      <Icon width={184} height={184} iconSrc={diagramLogo} />
    </div>
  );
});

export default HeroBlock;
