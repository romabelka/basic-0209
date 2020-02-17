import React from "react";
import cx from "classnames";
import styles from "../basket-item/basket-item.module.css";

function BasketRow({ align = "top", leftContent, rightContent, bold = false }) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <p className={cx("sm", { bold: bold })}>{leftContent}</p>
      </div>
      <div className={styles.info}>
        <p className={cx("sm", { bold: bold })}>{rightContent}</p>
      </div>
    </div>
  );
}

export default BasketRow;
