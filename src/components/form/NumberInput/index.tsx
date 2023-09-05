import React, { InputHTMLAttributes, memo } from "react";

import styles from "./NumberInput.module.css";

interface NumberInputProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {}

const NumberInput = memo(function NumberInput({
  value,
  onChange,
}: NumberInputProps) {
  return (
    <input
      className={styles["NumberInput"]}
      type="number"
      min={1}
      value={value}
      onChange={onChange}
    />
  );
});

export default NumberInput;
