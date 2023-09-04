import React, { ButtonHTMLAttributes, memo } from "react";

import Icon from "@/components/ui/Icon";
import { CurrencyType } from "@/types/currency";

import styles from "./CurrencyButton.module.css";

interface CurrencyButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    CurrencyType {}

const CurrencyButton = memo(function CurrencyButton({
  iconSrc,
  name,
  details,
  rate,
  rate_base,
  onClick,
}: CurrencyButtonProps) {
  return (
    <button className={styles["CurrencyButton"]} onClick={onClick}>
      <Icon width={64} height={64} iconSrc={iconSrc} />
      <div className={styles["CurrencyButton__Info"]}>
        <h1>{name}</h1>
        {details && <p>{details}</p>}
        {rate && <p>{`${rate.toFixed(6)} ${rate_base}`}</p>}
        {!details && !rate && <p>No conversion details to {rate_base}</p>}
      </div>
    </button>
  );
});

export default CurrencyButton;
