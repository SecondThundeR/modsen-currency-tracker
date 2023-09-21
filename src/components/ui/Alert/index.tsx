import React from "react";
import clsx from "clsx";

import styles from "./Alert.module.css";
import { AlertProps } from "./interfaces";

function Alert({ type, children }: AlertProps) {
  return (
    <div
      data-cy={`alert-${type}`}
      data-testid={`alert-${type}`}
      className={clsx(styles["Alert"], {
        [styles["Alert__Success"]]: type === "success",
        [styles["Alert__Error"]]: type === "error",
      })}
    >
      {children}
    </div>
  );
}

export default Alert;
