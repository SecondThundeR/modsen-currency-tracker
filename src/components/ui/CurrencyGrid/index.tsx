import React, { memo, useCallback } from "react";

import CurrencyButton from "@/components/ui/CurrencyButton";
import SectionHeader from "@/components/ui/SectionHeader";
import useCurrencyModal from "@/hooks/useCurrencyModal";
import { CurrencyType } from "@/types/currency";

import styles from "./CurrencyGrid.module.css";

interface CurrencyGridProps {
  sectionTitle: string;
  sectionInfo: CurrencyType[];
  onSectionClick: ReturnType<typeof useCurrencyModal>["handlers"]["onOpen"];
}

const CurrencyGrid = memo(function CurrencyGrid({
  sectionTitle,
  sectionInfo,
  onSectionClick,
}: CurrencyGridProps) {
  const onClick = useCallback(
    (id: string) => () => onSectionClick(id),
    [onSectionClick],
  );

  return (
    <div className={styles["CurrencyGrid"]}>
      <SectionHeader title={sectionTitle} />
      <div className={styles["CurrencyGrid__Buttons"]}>
        {sectionInfo.map((info) => {
          const currSectionOnClick = onClick(info.id);
          return (
            <CurrencyButton
              key={info.id}
              onClick={currSectionOnClick}
              {...info}
            />
          );
        })}
      </div>
    </div>
  );
});

export default CurrencyGrid;
