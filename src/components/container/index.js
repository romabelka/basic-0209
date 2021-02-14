import React from "react";
import cx from "classnames";
import styles from "./container.module.css";

export const Container = ({ children, className }) => (
  <div className={cx(styles.container, className)}>{children}</div>
);
