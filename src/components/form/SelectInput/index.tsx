import React, { memo, SelectHTMLAttributes } from "react";

import styles from "./SelectInput.module.css";

interface SelectInputProps
  extends Pick<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  options: string[];
}

const SelectInput = memo(function SelectInput({
  options,
  value,
  onChange,
}: SelectInputProps) {
  return (
    <select
      className={styles["SelectInput"]}
      defaultValue=""
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        Select currency
      </option>
      {options.map((optionData) => (
        <option key={optionData} value={optionData}>
          {optionData}
        </option>
      ))}
    </select>
  );
});

export default SelectInput;
