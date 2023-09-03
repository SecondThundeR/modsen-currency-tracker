import React, { memo } from "react";

import diagramLogo from "@/assets/diagramLogo.png";
import Icon from "@/components/Icon";

import styles from "./Footer.module.css";

const Footer = memo(function Footer() {
  return (
    <footer className={styles["Footer"]}>
      <div className={styles["ContentGrid"]}>
        <div className={styles["CompanyBlock"]}>
          <div className={styles["CompanyBlock__Logo"]}>
            <Icon width={32} height={32} iconSrc={diagramLogo} />
            <h1 className={styles["CompanyBlock__Name"]}>
              Modsen Currency Tracker
            </h1>
          </div>
          <p className={styles["CompanyBlock__Description"]}>
            Since then, the company has grown organically to. Starsup is the
            world's largest trading platform, with $12 billion worth of currency
            trading and 500,000 tickets sold daily to tens of thousands of
            traders worldwide.
          </p>
        </div>
        <div className={styles["InfoBlock"]}>
          <p>General</p>
          <div className={styles["InfoBlock__Links"]}>
            <p>Market</p>
            <p>Service</p>
          </div>
        </div>
        <div className={styles["InfoBlock"]}>
          <p>Product</p>
          <div className={styles["InfoBlock__Links"]}>
            <p>Sparks</p>
            <p>Snaps</p>
          </div>
        </div>
        <div className={styles["InfoBlock"]}>
          <p>Community</p>
          <div className={styles["InfoBlock__Links"]}>
            <p>Ideas</p>
            <p>Streams</p>
          </div>
        </div>
      </div>
      <p className={styles["Footer__bottomText"]}>
        Startsup © 2023-2024, All Rights Reserved
      </p>
    </footer>
  );
});

export default Footer;
