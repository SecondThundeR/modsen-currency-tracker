import React from "react";

import styles from "./PlaceholderHero.module.css";

interface PlaceholderHeroProps {
  text: string;
}

const PlaceholderHero = React.memo(function PlaceholderHero({
  text,
}: PlaceholderHeroProps) {
  return (
    <div className={styles["PlaceholderHero"]}>
      <h1>{text}</h1>
    </div>
  );
});

export default PlaceholderHero;
