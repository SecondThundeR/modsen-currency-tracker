import React, { ButtonHTMLAttributes, memo, PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface ButtonProps
  extends PropsWithChildren,
    Pick<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "className" | "onClick" | "type" | "disabled"
    > {}

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
