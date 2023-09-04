import React from "react";
import { PuffLoader } from "react-spinners";

import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles["Loader"]}>
      <PuffLoader color="#00bc4f" />
      <h1>Loading...</h1>
    </div>
  );
}

export default Loader;
