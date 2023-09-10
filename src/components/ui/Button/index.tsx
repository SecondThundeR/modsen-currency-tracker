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
  ...props
}: ButtonProps) {
  return (
    <button className={className ?? styles["Button"]} {...props}>
      {children}
    </button>
  );
});

export default Button;
