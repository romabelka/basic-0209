import Button from "antd/es/button";
import cx from "classnames";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import React, { useContext } from "react";
import styles from "./basket.module.css";
import BasketRow from "./basket-row";
import BasketItem from "./basket-item";
import { connect } from "react-redux";
import {
  orderedProductsSelector,
  totalPriceSelector
} from "../../redux/selectors";
import { Consumer as UserConsumer } from "../../contexts/user-context";
import langContext from "../../contexts/lang-context";
import "./basket.css";

function Basket({ title = "Basket", className, total, orderProducts }) {
  const { lang } = useContext(langContext);
  return (
    <div className={cx(styles.basket, className)}>
      <UserConsumer>
        {({ name, setName }) => (
          <Typography.Title
            level={4}
            className={styles.title}
            onClick={() => {
              setName("hohoho");
              console.log(name);
            }}
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

      <BasketRow leftContent={lang.sub_total} rightContent={`${total} $`} />
      <BasketRow leftContent={lang.delivery_costs} rightContent="FREE" />
      <BasketRow leftContent={lang.total} rightContent={`${total} $`} />
      <Link to="/checkout">
        <Button type="primary" size="large" block>
          {lang.order}
        </Button>
      </Link>
    </div>
  );
}

export default connect(state => ({
  total: totalPriceSelector(state),
  orderProducts: orderedProductsSelector(state)
}))(Basket);
