import React from "react";

import { CURRENCY_OPTIONS } from "@/constants/currencyOptions";

import styles from "./CurrencySearchDropdownItem.module.css";

interface CurrencySearchDropdownItemProps
  extends Omit<(typeof CURRENCY_OPTIONS)[number], "iconSrc"> {
  setSelectedCurrency: (currency: string) => void;
}

class CurrencySearchDropdownItem extends React.Component<CurrencySearchDropdownItemProps> {
  render() {
    const { setSelectedCurrency, ...item } = this.props;
    const { id, name } = item;
    return (
      <div
        data-cy="dropdown-item"
        data-testid="dropdown-item"
        className={styles["CurrencySearchDropdownItem"]}
        onClick={() => setSelectedCurrency(name)}
      >
        <h1>{name}</h1>
        <p>{id}</p>
      </div>
    );
  }
}

export default CurrencySearchDropdownItem;
