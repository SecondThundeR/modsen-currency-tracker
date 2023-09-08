import React, { InputHTMLAttributes, memo } from "react";

import styles from "./NumberInput.module.css";

interface NumberInputProps
  extends Pick<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange" | "max"
  > {}

const NumberInput = memo(function NumberInput({
  value,
  max,
  onChange,
}: NumberInputProps) {
  return (
    <input
      className={styles["NumberInput"]}
      type="number"
      min={1}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
});

export default NumberInput;
