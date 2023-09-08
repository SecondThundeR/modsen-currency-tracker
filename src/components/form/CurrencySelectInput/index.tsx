import React, { SelectHTMLAttributes } from "react";

import { CurrencyType } from "@/types/currency";

import styles from "./CurrencySelectInput.module.css";

interface CurrencySelectInputProps
  extends Pick<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  options: Pick<CurrencyType, "id" | "name">[];
  optionsHeaderText: string;
}

class CurrencySelectInput extends React.Component<CurrencySelectInputProps> {
  render() {
    const { value, onChange, options, optionsHeaderText } = this.props;
    return (
      <select
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
