import React, { memo } from "react";

import styles from "./PlaceholderHero.module.css";

interface PlaceholderHeroProps {
  text: string;
}

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
