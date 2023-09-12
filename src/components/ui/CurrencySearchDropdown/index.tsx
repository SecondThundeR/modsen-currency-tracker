import React from "react";

import { filterCurrencyOptions } from "@/utils/filterCurrencyOptions";

import CurrencySearchDropdownItem from "../CurrencySearchDropdownItem";
import styles from "./CurrencySearchDropdown.module.css";

interface CurrencySearchDropdownProps {
  value: string;
  setSelectedCurrency: (currency: string) => void;
}

class CurrencySearchDropdown extends React.Component<CurrencySearchDropdownProps> {
  render() {
    const { value, setSelectedCurrency } = this.props;

    const filteredOptions = filterCurrencyOptions(value);

    if (filteredOptions.length === 0) return null;

    return (
      <div className={styles["CurrencySearchDropdown"]}>
        {filteredOptions.map((item) => (
          <CurrencySearchDropdownItem
            key={item.id}
            setSelectedCurrency={() => setSelectedCurrency(item.name)}
            {...item}
          />
        ))}
      </div>
    );
  }
}

export default CurrencySearchDropdown;
