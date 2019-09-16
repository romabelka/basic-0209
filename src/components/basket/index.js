import Button from "antd/es/button";
import cx from "classnames";
import React from "react";
import { Typography } from "antd";

import styles from "./basket.module.css";
import BasketRow from "./basket-row";
import BasketItem from "./basket-item";

function Basket({ title = "Basket", className }) {
  return (
    <div className={cx(styles.basket, className)}>
      <Typography.Title level={4} className={styles.title}>
        {title}
      </Typography.Title>
      <BasketItem />
      <BasketItem />
      <hr />

      <BasketRow leftContent="Sub-total" rightContent="€ 8.95" />
      <BasketRow leftContent="Delivery costs" rightContent="FREE" />
      <BasketRow leftContent="Total" rightContent="€ 8.95" />
      <Button type="primary" size="large" block>
        order
      </Button>
    </div>
  );
}

export default Basket;
