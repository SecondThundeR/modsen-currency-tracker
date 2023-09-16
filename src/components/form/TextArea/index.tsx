import React, { memo, TextareaHTMLAttributes } from "react";

import styles from "./TextArea.module.css";

interface TextAreaProps
  extends Pick<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "value" | "onChange" | "required" | "name" | "id"
  > {
  label?: string;
}

const TextArea = memo(function TextArea({ label, ...props }: TextAreaProps) {
  return (
    <label className={styles["TextArea__Label"]}>
      {label}
      <textarea data-cy="textarea" className={styles["TextArea"]} {...props} />
    </label>
  );
});

export default TextArea;
