import React from "react";
import { createPortal } from "react-dom";

import styles from "./Backdrop.module.css";
import { BackdropProps } from "./interfaces";

function Backdrop({ children, closeModal }: BackdropProps) {
  return createPortal(
    <div
      data-cy="backdrop"
      data-testid="backdrop"
      className={styles["Backdrop"]}
      onClick={closeModal}
    >
      {children}
    </div>,
    document.getElementById("portal")!,
  );
}

export default Backdrop;
