import React, { ButtonHTMLAttributes, memo, PropsWithChildren } from "react";

import styles from "./Button.module.css";

interface ButtonProps
  extends PropsWithChildren,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "onClick"> {}

const Button = memo(function Button({
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button className={className ?? styles["Button"]} onClick={onClick}>
      {children}
    </button>
  );
});

export default Button;
