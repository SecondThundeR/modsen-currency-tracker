import React, { memo } from "react";
import { createPortal } from "react-dom";

import useCurrencyModal from "@/hooks/useCurrencyModal";

import styles from "./Backdrop.module.css";

interface BackdropProps extends React.PropsWithChildren {
  closeModal: ReturnType<typeof useCurrencyModal>["handlers"]["onClose"];
}

const Backdrop = memo(function Backdrop({
  children,
  closeModal,
}: BackdropProps) {
  return createPortal(
    <div data-cy="backdrop" className={styles["Backdrop"]} onClick={closeModal}>
      {children}
    </div>,
    document.getElementById("portal")!,
  );
});

export default Backdrop;
