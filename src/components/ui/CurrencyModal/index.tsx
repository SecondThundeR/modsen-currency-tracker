import React from "react";

import styles from "./CurrencyModal.module.css";

const CurrencyModal = React.memo(function CurrencyModal() {
  return <div className={styles["CurrencyModal"]}></div>;
});

export default CurrencyModal;
