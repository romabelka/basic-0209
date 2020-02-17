import cx from "classnames";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styles from "./basket.module.css";
import BasketRow from "./basket-row";
import BasketItem from "./basket-item";
import { Button } from "../button";
import { connect } from "react-redux";
import {
  orderedProductsSelector,
  totalPriceSelector
} from "../../redux/selectors";
import "./basket.css";
import i18n from "../../contexts/i18n-context";

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
        <h4 className={styles.title}>{t("select_meal")}</h4>
      </div>
    );
  }

  return (
    <div className={cx(styles.basket, className)}>
      <h4 className={styles.title}>{t("basket")}</h4>
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
      <hr className={styles.hr} />

      <BasketRow leftContent={t("sub_total")} rightContent={`${total} $`} />
      <BasketRow leftContent={t("delivery_costs")} rightContent={t("free")} />
      <BasketRow leftContent={t("total")} rightContent={`${total} $`} bold />
      {!hideButton && (
        <Link to="/checkout">
          <Button type="primary" block className={styles.button}>
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
