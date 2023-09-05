import React, { memo } from "react";
import { createPortal } from "react-dom";

import styles from "./Backdrop.module.css";

interface BackdropProps
  extends React.PropsWithChildren<{ closeModal: () => void }> {}

const Backdrop = memo(function Backdrop({
  children,
  closeModal,
}: BackdropProps) {
  return createPortal(
    <div className={styles["Backdrop"]} onClick={closeModal}>
      {children}
    </div>,
    document.getElementById("portal")!,
  );
});

export default Backdrop;
