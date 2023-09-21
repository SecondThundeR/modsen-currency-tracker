import React from "react";

import CurrencySearchDropdownItem from "@/components/ui/CurrencySearchDropdownItem";
import { filterCurrencyOptions } from "@/utils/filterCurrencyOptions";

import styles from "./CurrencySearchDropdown.module.css";
import { CurrencySearchDropdownProps } from "./interfaces";

class CurrencySearchDropdown extends React.PureComponent<CurrencySearchDropdownProps> {
  render() {
    const { value, setSelectedCurrency } = this.props;

    const filteredOptions = filterCurrencyOptions(value);

    if (filteredOptions.length === 0) return null;

    return (
      <div className={styles["CurrencySearchDropdown"]}>
        {filteredOptions.map((item) => (
          <CurrencySearchDropdownItem
            key={item.id}
            setSelectedCurrency={() =>
              setSelectedCurrency({ name: item.name, id: item.id })
            }
            {...item}
          />
        ))}
      </div>
    );
  }
}

export default CurrencySearchDropdown;
