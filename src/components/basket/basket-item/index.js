import React from "react";
import cx from "classnames";
import { increment, decrement } from "../../../redux/ac";
import { Button } from "../../button";
import styles from "./basket-item.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import MinusIcon from "./icons/squared-minus.svg";
import PlusIcon from "./icons/squared-plus.svg";

function BasketItem({ product, amount, restaurant, increment, decrement }) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link to={`/restaurants/${restaurant.id}/menu`}>
          <span>{product.name}</span>
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button
            type="unstyled"
            size="sm"
            className={styles.button}
            onClick={() => decrement(product.id)}
          >
            <img src={MinusIcon} alt="" />
          </Button>
          <span className={styles.count}>{amount}</span>
          <Button
            type="unstyled"
            size="sm"
            className={styles.button}
            onClick={() => increment(product.id)}
          >
            <img src={PlusIcon} alt="" />
          </Button>
        </div>
        <p className={cx(styles.count, styles.price)}>
          ${product.price * amount}
        </p>
      </div>
    </div>
  );
}

export default connect(
  null,
  { increment, decrement }
)(BasketItem);
