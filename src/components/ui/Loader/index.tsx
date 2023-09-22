import React, { memo } from "react";
import { useSelector } from "react-redux";
import { PuffLoader } from "react-spinners";

import { COLORS } from "@/constants/colors";
import { RootState } from "@/store";

import styles from "./Loader.module.css";

const Loader = memo(function Loader() {
  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme,
  );
  const accentColor = COLORS[currentTheme].accent;

  return (
    <div data-testid="loader" data-cy="loader" className={styles["Loader"]}>
      <PuffLoader color={accentColor} />
      <h1>Loading...</h1>
    </div>
  );
});

export default Loader;
