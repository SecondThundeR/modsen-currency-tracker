import React, { memo } from "react";

import { SelectInputProps } from "./interfaces";
import styles from "./SelectInput.module.css";

const SelectInput = memo(function SelectInput({
  options,
  optionsHeaderText,
  value,
  onChange,
}: SelectInputProps) {
  return (
    <select
      data-cy="select"
      data-testid="select"
      className={styles["SelectInput"]}
      defaultValue=""
      value={value}
      onChange={onChange}
    >
      <option value="" disabled>
        {optionsHeaderText}
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
