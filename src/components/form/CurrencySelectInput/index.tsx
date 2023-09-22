import React from "react";

import styles from "./CurrencySelectInput.module.css";
import { CurrencySelectInputProps } from "./interfaces";

class CurrencySelectInput extends React.PureComponent<CurrencySelectInputProps> {
  render() {
    const { value, onChange, options, optionsHeaderText } = this.props;
    return (
      <select
        data-cy="currency-select"
        className={styles["CurrencySelectInput"]}
        defaultValue=""
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>
          {optionsHeaderText}
        </option>
        {options.map((optionData) => (
          <option key={optionData.id} value={optionData.id}>
            {optionData.name}
          </option>
        ))}
      </select>
    );
  }
}

export default CurrencySelectInput;
