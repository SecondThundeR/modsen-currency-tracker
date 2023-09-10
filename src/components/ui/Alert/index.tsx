import React, { PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./Alert.module.css";

interface AlertProps extends PropsWithChildren {
  type: "success" | "error";
}

function Alert({ type, children }: AlertProps) {
  return (
    <div
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
