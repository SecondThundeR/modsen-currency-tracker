import React, { FormHTMLAttributes, PropsWithChildren } from "react";

import styles from "./FormWrapper.module.css";

interface FormWrapperProps
  extends PropsWithChildren,
    Pick<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {}

function FormWrapper({ children, ...props }: FormWrapperProps) {
  return (
    <form className={styles["FormWrapper"]} {...props}>
      {children}
    </form>
  );
}

export default FormWrapper;
