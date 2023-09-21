import React, { memo } from "react";

import Button from "@/components/ui/Button";
import CurrencyButtonInfo from "@/components/ui/CurrencyButtonInfo";
import Icon from "@/components/ui/Icon";

import styles from "./CurrencyButton.module.css";
import { CurrencyButtonProps } from "./interfaces";

const CurrencyButton = memo(function CurrencyButton({
  onClick,
  iconSrc,
  ...currencyInfo
}: CurrencyButtonProps) {
  const { name } = currencyInfo;

  return (
    <Button className={styles["CurrencyButton"]} onClick={onClick}>
      <Icon width={64} height={64} src={iconSrc} title={name} alt={name} />
      <CurrencyButtonInfo {...currencyInfo} />
    </Button>
  );
});

export default CurrencyButton;
