import React, { PropsWithChildren } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";

import styles from "./Toast.module.css";

interface ToastProps extends PropsWithChildren {
  isOpen: boolean;
}

class Toast extends React.Component<ToastProps> {
  render() {
    const { isOpen, children } = this.props;

    return createPortal(
      <div
        data-cy="toast"
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
