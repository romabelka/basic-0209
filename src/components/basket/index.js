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
import "./basket.css";
import I18nContext from "../../contexts/i18n-context";

function Basket({ title = "Basket", className, total, orderProducts }) {
  const { trans } = useContext(I18nContext);

  return (
    <div className={cx(styles.basket, className)}>
      <UserConsumer>
        {({ name, setName }) => (
          <Typography.Title
            level={4}
            className={styles.title}
            onClick={() => setName("hohoho")}
          >
            {trans("names_order", { name })}
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

      <BasketRow leftContent={trans("subtotal")} rightContent={`${total} $`} />
      <BasketRow
        leftContent={trans("delivery_costs")}
        rightContent={trans("free")}
      />
      <BasketRow leftContent={trans("total")} rightContent={`${total} $`} />
      <Link to="/checkout">
        <Button type="primary" size="large" block>
          {trans("do_order")}
        </Button>
      </Link>
    </div>
  );
}

export default connect(state => ({
  total: totalPriceSelector(state),
  orderProducts: orderedProductsSelector(state)
}))(Basket);
