import React, { ButtonHTMLAttributes, memo } from "react";

import Icon from "@/components/ui/Icon";

import styles from "./CurrencyButton.module.css";

export interface CurrencyButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  iconSrc: string;
  name: string;
  details: string;
}

const CurrencyButton = memo(function CurrencyButton({
  iconSrc,
  name,
  details,
  onClick,
}: CurrencyButtonProps) {
  return (
    <button className={styles["CurrencyButton"]} onClick={onClick}>
      <Icon width={64} height={64} iconSrc={iconSrc} />
      <div className={styles["CurrencyButton__Info"]}>
        <h1>{name}</h1>
        <p>{details}</p>
      </div>
    </button>
  );
});

export default CurrencyButton;
