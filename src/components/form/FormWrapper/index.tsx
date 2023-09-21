import React from "react";

import styles from "./FormWrapper.module.css";
import { FormWrapperProps } from "./interfaces";

function FormWrapper({ children, ...props }: FormWrapperProps) {
  return (
    <form className={styles["FormWrapper"]} {...props}>
      {children}
    </form>
  );
}

export default FormWrapper;
