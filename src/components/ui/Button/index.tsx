import React, { PropsWithChildren } from "react";

import styles from "./Button.module.css";

const Button = function Button({ children }: PropsWithChildren) {
  return <button className={styles["Button"]}>{children}</button>;
};

export default Button;
