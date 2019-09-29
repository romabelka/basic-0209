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
//import { Consumer as UserConsumer } from "../../contexts/user-context";
import "./basket.css";
import { Consumer as LocalizationConsumer } from "../../contexts/localization-context";

function Basket({ title = "Basket", className, total, orderProducts }) {
  return (
    <LocalizationConsumer>
      {({ translate }) => (
        <div className={cx(styles.basket, className)}>
          {/* <UserConsumer>
        {({ name, setName }) => (
          <Typography.Title
            level={4}
            className={styles.title}
            onClick={() => setName("hohoho")}
          >
            {name}`s order
          </Typography.Title>
        )}
      </UserConsumer> */}
          <Typography.Title level={4} className={styles.title}>
            {translate("basketTitle")}
          </Typography.Title>
          <TransitionGroup>
            {orderProducts.map(({ product, amount, restaurant }) => (
              <CSSTransition
                timeout={500}
                classNames="basket-item-animation"
                key={product.id}
              >
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

          <BasketRow
            leftContent={translate("subTotal")}
            rightContent={`${total} $`}
          />
          <BasketRow
            leftContent={translate("delivery")}
            rightContent={translate("free")}
          />
          <BasketRow
            leftContent={translate("total")}
            rightContent={`${total} $`}
          />
          <Link to="/checkout">
            <Button type="primary" size="large" block>
              {translate("orderButton")}
            </Button>
          </Link>
        </div>
      )}
    </LocalizationConsumer>
  );
}

export default connect(state => ({
  total: totalPriceSelector(state),
  orderProducts: orderedProductsSelector(state)
}))(Basket);
