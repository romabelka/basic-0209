import PropTypes from "prop-types";
import React from "react";
import styles from "./product.module.css";
import { Card } from "../card";
import MinusIcon from "./icons/minus.svg";
import PlusIcon from "./icons/plus.svg";

export default function Product({
  product,
  amount,
  handleIncrement,
  handleDecrement
}) {
  if (!product) return null;

  return (
    <Card className={styles.productDetailedOrderCard}>
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(", ")}</p>
          <div className={styles.price}>{product.price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttonGroup}>
              <button
                className={styles.button}
                onClick={() => handleDecrement(product.id)}
              >
                <img src={MinusIcon} alt="icon" />
              </button>
              <button
                className={styles.button}
                onClick={() => handleIncrement(product.id)}
                data-id="product-increment-btn"
              >
                <img src={PlusIcon} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.array.isRequired
  }),
  // from amount decorator
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};
