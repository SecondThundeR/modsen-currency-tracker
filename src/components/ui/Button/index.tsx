import React, { memo } from "react";

import styles from "./Button.module.css";
import { ButtonProps } from "./interfaces";

const Button = memo(function Button({
  children,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      data-cy={type}
      data-testid={type}
      className={className ?? styles["Button"]}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
