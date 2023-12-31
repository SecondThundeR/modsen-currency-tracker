import React, { memo } from "react";

import { PlaceholderHeroProps } from "./interfaces";
import styles from "./PlaceholderHero.module.css";

const PlaceholderHero = memo(function PlaceholderHero({
  text,
}: PlaceholderHeroProps) {
  return (
    <div data-testid="placeholder-hero" className={styles["PlaceholderHero"]}>
      <h1>{text}</h1>
    </div>
  );
});

export default PlaceholderHero;
