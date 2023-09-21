import React, { memo } from "react";

import styles from "./Input.module.css";
import { InputProps } from "./interfaces";

const Input = memo(function Input({ label, ...props }: InputProps) {
  return (
    <label className={styles["Input__Label"]}>
      {label}
      <input
        data-cy="input"
        data-testid="input"
        className={styles["Input"]}
        min={1}
        {...props}
      />
    </label>
  );
});

export default Input;
