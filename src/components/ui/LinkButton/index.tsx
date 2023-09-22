import React, { memo } from "react";
import { Link } from "react-router-dom";

import { LinkButtonProps } from "./interfaces";
import styles from "./LinkButton.module.css";

const LinkButton = memo(function LinkButton({ children, to }: LinkButtonProps) {
  return (
    <Link
      data-cy="link-btn"
      data-testid="link-btn"
      className={styles["LinkButton"]}
      to={to}
    >
      {children}
    </Link>
  );
});

export default LinkButton;
