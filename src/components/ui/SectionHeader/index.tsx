import React, { memo } from "react";

import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
}

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
