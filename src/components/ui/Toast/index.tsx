import React from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";

import { ToastProps } from "./interfaces";
import styles from "./Toast.module.css";

class Toast extends React.Component<ToastProps> {
  render() {
    const { isOpen, children } = this.props;

    return createPortal(
      <div
        data-cy="toast"
        data-testid="toast"
        className={clsx(styles["Toast"], {
          [styles["Toast--visible"]]: isOpen,
        })}
      >
        {children}
      </div>,
      document.getElementById("toast")!,
    );
  }
}

export default Toast;
