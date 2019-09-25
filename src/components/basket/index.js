import Button from "antd/es/button";
import cx from "classnames";
import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

import styles from "./basket.module.css";
import BasketRow from "./basket-row";
import BasketItem from "./basket-item";
import { connect } from "react-redux";
import {
  orderedProductsSelector,
  totalPriceSelector
} from "../../redux/selectors";

function Basket({ title = "Basket", className, total, orderProducts }) {
  console.log("---", "rendering Basket");
  console.log("products in basket", orderProducts.toJS());
  return (
    <div className={cx(styles.basket, className)}>
      <Typography.Title level={4} className={styles.title}>
        {title}
      </Typography.Title>
      {orderProducts.map(({ product, amount }) => (
        <BasketItem product={product} amount={amount} key={product.id} />
      ))}
      <hr />

      <BasketRow leftContent="Sub-total" rightContent={`${total} $`} />
      <BasketRow leftContent="Delivery costs" rightContent="FREE" />
      <BasketRow leftContent="Total" rightContent={`${total} $`} />
      <Link to="/checkout">
        <Button type="primary" size="large" block>
          order
        </Button>
      </Link>
    </div>
  );
}

export default connect(state => ({
  total: totalPriceSelector(state),
  orderProducts: orderedProductsSelector(state)
}))(Basket);
