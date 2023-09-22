import React, { memo } from "react";

import { TextAreaProps } from "./interfaces";
import styles from "./TextArea.module.css";

const TextArea = memo(function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <label className={styles["TextArea__Label"]}>
      {label}
      <textarea data-cy="textarea" className={styles["TextArea"]} {...props} />
    </label>
  );
});

export default TextArea;
