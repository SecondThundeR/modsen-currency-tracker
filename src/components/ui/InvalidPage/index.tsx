import React, { memo } from "react";

import LinkButton from "@/components/ui/LinkButton";
import { ROOT_ROUTE } from "@/constants/routes";

import styles from "./InvalidPage.module.css";

const InvalidPage = memo(function InvalidPage() {
  return (
    <div data-testid="invalid-page" className={styles["InvalidPage"]}>
      <h1>It looks like this page doesn't exist</h1>
      <LinkButton to={ROOT_ROUTE}>Go to home page</LinkButton>
    </div>
  );
});

export default InvalidPage;
