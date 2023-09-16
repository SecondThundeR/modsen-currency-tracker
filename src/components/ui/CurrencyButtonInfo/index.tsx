import React, { memo } from "react";

import { CurrencyType } from "@/types/currency";

import styles from "./CurrencyButtonInfo.module.css";

interface CurrencyButtonInfo extends Omit<CurrencyType, "id" | "iconSrc"> {}

const CurrencyButtonInfo = memo(function CurrencyButtonInfo({
  name,
  details,
  rate,
  rate_base,
}: CurrencyButtonInfo) {
  return (
    <div className={styles["CurrencyButtonInfo"]}>
      <h1>{name}</h1>
      {details && <p>{details}</p>}
      {rate && <p>{`${rate.toFixed(6)} ${rate_base}`}</p>}
      {!details && !rate && <p>No conversion details found</p>}
    </div>
  );
});

export default CurrencyButtonInfo;
