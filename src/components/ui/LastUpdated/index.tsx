import React, { memo } from "react";

import { LastUpdatedProps } from "./interfaces";
import styles from "./LastUpdated.module.css";

const LastUpdated = memo(function LastUpdated({
  updateTime,
}: LastUpdatedProps) {
  return (
    <div data-cy="last-updated" className={styles["LastUpdated"]}>
      <div className={styles["LastUpdated__Animation"]} />
      <p>Last updated at {updateTime}</p>
    </div>
  );
});

export default LastUpdated;
