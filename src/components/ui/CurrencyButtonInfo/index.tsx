import React, { memo } from "react";

import styles from "./CurrencyButtonInfo.module.css";
import { CurrencyButtonInfoProps } from "./interfaces";

const CurrencyButtonInfo = memo(function CurrencyButtonInfo({
  name,
  details,
  rate,
  rate_base,
}: CurrencyButtonInfoProps) {
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
