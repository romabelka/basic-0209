import React from "react";
import cx from "classnames";

import styles from "./card.module.css";

export const Card = ({ className, hoverable, children }) => (
  <div
    className={cx(styles.card, className, { [styles.hoverable]: hoverable })}
  >
    {children}
  </div>
);
