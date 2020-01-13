import Button from "antd/es/button";
import cx from "classnames";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./basket.module.css";
import BasketRow from "./basket-row";
import BasketItem from "./basket-item";
import { connect } from "react-redux";
import {
  orderedProductsSelector,
  totalPriceSelector
} from "../../redux/selectors";
import "./basket.css";
import i18n from "../../contexts/i18n-context";
import { Typography } from "antd";

function Basket({
  title = "Basket",
  className,
  total,
  orderProducts,
  hideButton
}) {
  const { t } = useContext(i18n);
  if (!total) {
    return (
      <div className={cx(styles.basket, className)}>
        <Typography.Title level={4} style={{ paddingTop: 20 }}>
          Select a meal from the list
        </Typography.Title>
      </div>
    );
  }

  return (
    <div className={cx(styles.basket, className)}>
      <Typography.Title level={4}>Basket</Typography.Title>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, restaurant }) => (
          <CSSTransition timeout={500} classNames="basket-item-animation">
            <BasketItem
              product={product}
              amount={amount}
              restaurant={restaurant}
              key={product.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr />

      <BasketRow leftContent="Sub-total" rightContent={`${total} $`} />
      <BasketRow leftContent="Delivery costs" rightContent="FREE" />
      <BasketRow leftContent="Total" rightContent={`${total} $`} />
      {!hideButton && (
        <Link to="/checkout">
          <Button type="primary" size="large" block>
            {t("order_btn")}
          </Button>
        </Link>
      )}
    </div>
  );
}

export default connect(state => ({
  total: totalPriceSelector(state),
  orderProducts: orderedProductsSelector(state)
}))(Basket);
