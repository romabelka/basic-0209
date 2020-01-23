import { Button, Card, Col, Row, Typography } from "antd";
import PropTypes from "prop-types";
import React from "react";
import styles from "./product.module.css";

export default function Product({
  product,
  amount,
  handleIncrement,
  handleDecrement
}) {
  if (!product) return null;

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between" align="middle">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} className={styles.title}>
            {product.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {product.ingredients.join(", ")}
          </Typography.Paragraph>
          <div className={styles.price}>{product.price} $</div>
        </Col>
        <Col xs={8} md={8} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <Button.Group>
              <Button
                className={styles.button}
                onClick={() => handleDecrement(product.id)}
              >
                &mdash;
              </Button>
              <Button
                className={styles.button}
                onClick={() => handleIncrement(product.id)}
                data-id="product-increment-btn"
              >
                &#43;
              </Button>
            </Button.Group>
          </div>
        </Col>
      </Row>
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
