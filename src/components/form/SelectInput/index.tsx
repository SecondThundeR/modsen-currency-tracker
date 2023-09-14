import React, { memo, SelectHTMLAttributes } from "react";

import styles from "./SelectInput.module.css";

interface SelectInputProps
  extends Pick<SelectHTMLAttributes<HTMLSelectElement>, "value" | "onChange"> {
  options: string[];
  optionsHeaderText: string;
}

const SelectInput = memo(function SelectInput({
  options,
  optionsHeaderText,
  value,
  onChange,
}: SelectInputProps) {
  return (
    <select
      data-cy="select"
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
