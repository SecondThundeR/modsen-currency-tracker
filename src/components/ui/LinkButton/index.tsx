import React, { memo, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

import styles from "./LinkButton.module.css";

interface LinkButtonProps extends PropsWithChildren, Pick<LinkProps, "to"> {}

const LinkButton = memo(function LinkButton({ children, to }: LinkButtonProps) {
  return (
    <Link data-cy="link-btn" className={styles["LinkButton"]} to={to}>
      {children}
    </Link>
  );
});

export default LinkButton;
