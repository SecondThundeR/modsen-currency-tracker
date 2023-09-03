import React, { memo } from "react";

import CurrencyButton, {
  CurrencyButtonProps,
} from "@/components/ui/CurrencyButton";
import SectionHeader from "@/components/ui/SectionHeader";

import styles from "./CurrencyGrid.module.css";

interface CurrencyGridProps {
  sectionTitle: string;
  sectionInfo: CurrencyButtonProps[];
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
          <CurrencyButton
            key={info.name.toLowerCase().split(" ").join("-")}
            {...info}
          />
        ))}
      </div>
    </div>
  );
});

export default CurrencyGrid;
