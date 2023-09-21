import React, { memo } from "react";

import { SectionHeaderProps } from "./interfaces";
import styles from "./SectionHeader.module.css";

const SectionHeader = memo(function SectionHeader({
  title,
}: SectionHeaderProps) {
  return (
    <div data-testid="section-header" className={styles["SectionHeader"]}>
      <p>{title}</p>
    </div>
  );
});

export default SectionHeader;
