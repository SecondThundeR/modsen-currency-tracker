import React, { memo } from "react";

import styles from "./LastUpdated.module.css";

interface LastUpdatedProps {
  updateTime: string;
}

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
