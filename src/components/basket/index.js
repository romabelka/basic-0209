import Button from "antd/es/button";
import cx from "classnames";
import React from "react";
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
import { Consumer as LanguageConsumer } from "../../contexts/language-context";
import "./basket.css";

function Basket({ title = "Basket", className, total, orderProducts }) {
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
      <LanguageConsumer>
        {({ language }) => {
          return (
            <>
              <BasketRow
                leftContent={language.SUB_TOTAL}
                rightContent={`${total} $`}
              />
              <BasketRow
                leftContent={language.DELIVERY_COSTS}
                rightContent={language.FREE}
              />
              <BasketRow
                leftContent={language.TOTAL}
                rightContent={`${total} $`}
              />
              <Link to="/checkout">
                <Button type="primary" size="large" block>
                  {language.ORDER}
                </Button>
              </Link>
            </>
          );
        }}
      </LanguageConsumer>
    </div>
  );
}

export default connect(state => ({
  total: totalPriceSelector(state),
  orderProducts: orderedProductsSelector(state)
}))(Basket);
