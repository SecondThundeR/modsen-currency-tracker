import React, { ButtonHTMLAttributes, memo } from "react";

import Button from "@/components/ui/Button";
import CurrencyButtonInfo from "@/components/ui/CurrencyButtonInfo";
import Icon from "@/components/ui/Icon";
import { CurrencyType } from "@/types/currency";

import styles from "./CurrencyButton.module.css";

interface CurrencyButtonProps
  extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">,
    CurrencyType {}

const CurrencyButton = memo(function CurrencyButton({
  onClick,
  iconSrc,
  ...currencyInfo
}: CurrencyButtonProps) {
  return (
    <Button className={styles["CurrencyButton"]} onClick={onClick}>
      <Icon width={64} height={64} iconSrc={iconSrc} />
      <CurrencyButtonInfo {...currencyInfo} />
    </Button>
  );
});

export default CurrencyButton;
