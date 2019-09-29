import Button from "antd/es/button";
import cx from "classnames";
import React, { useContext } from "react";
import { Typography } from "antd";
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
import { Consumer as UserConsumer } from "../../contexts/user-context";
import useTranslate from "../../hooks/use-translate";
import "./basket.css";

function Basket({ title = "Basket", className, total, orderProducts }) {
  const t = useTranslate();

  return (
    <div className={cx(styles.basket, className)}>
      <UserConsumer>
        {({ name, setName }) => (
          <Typography.Title
            level={4}
            className={styles.title}
            onClick={() => setName("hohoho")}
          >
            {name}`s order
          </Typography.Title>
        )}
      </UserConsumer>
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

      <BasketRow leftContent={t("Sub-total")} rightContent={`${total} $`} />
      <BasketRow leftContent={t("Delivery costs")} rightContent="FREE" />
      <BasketRow leftContent={t("Total")} rightContent={`${total} $`} />
      <Link to="/checkout">
        <Button type="primary" size="large" block>
          {t("checkoutButton")}
        </Button>
      </Link>
    </div>
  );
}

export default connect(state => ({
  total: totalPriceSelector(state),
  orderProducts: orderedProductsSelector(state)
}))(Basket);
