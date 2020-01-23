import React from "react";
import { Spin } from "antd";
import styles from "./loader.module.css";

function Loader() {
  return <Spin className={styles.loader} />;
}

Loader.propTypes = {};

export default Loader;
