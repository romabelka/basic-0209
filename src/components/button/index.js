import React from "react";
import cx from "classnames";

import styles from "./button.module.css";

export const Button = ({
  type = "primary",
  buttonType = "button",
  size,
  block,
  className,
  handleClick,
  children
}) =>
  type === "unstyled" ? (
    <button
      type={buttonType}
      className={cx(
        {
          [styles.unstyled]: type === "unstyled",
          [styles.sm]: size === "sm",
          [styles.block]: block
        },
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  ) : (
    <button
      type={buttonType}
      className={cx(
        styles.button,
        {
          [styles.primary]: type === "primary",
          [styles.outline]: type === "outline",
          [styles.sm]: size === "sm",
          [styles.block]: block
        },
        className
      )}
      onClick={handleClick}
    >
      {children}
    </button>
  );
