import React, { memo } from "react";

import CurrencyButton from "@/components/ui/CurrencyButton";
import SectionHeader from "@/components/ui/SectionHeader";
import { CurrencyType } from "@/types/currency";

import styles from "./CurrencyGrid.module.css";

interface CurrencyGridProps {
  sectionTitle: string;
  sectionInfo: CurrencyType[];
}

const CurrencyGrid = memo(function CurrencyGrid({
  sectionTitle,
  sectionInfo,
}: CurrencyGridProps) {
  return (
    <div className={styles["CurrencyGrid"]}>
      <SectionHeader title={sectionTitle} />
      <div className={styles["CurrencyGrid__Buttons"]}>
        {sectionInfo.map((info) => (
          <CurrencyButton key={info.id} {...info} />
        ))}
      </div>
    </div>
  );
});

export default CurrencyGrid;
