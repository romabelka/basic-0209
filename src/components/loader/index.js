import React from "react";
import styles from "./loader.module.css";

function Loader() {
  return (
    <div className={styles.spinner}>
      <div className={styles["double-bounce1"]} />
      <div className={styles["double-bounce2"]} />
    </div>
  );
}

Loader.propTypes = {};

export default Loader;
