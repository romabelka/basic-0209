import React, { useEffect } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import PropTypes from "prop-types";
import amount from "../../decorators/amount";
import styles from "./product.module.css";

function Product({ product, amount, increment, decrement, fetchProduct }) {
  useEffect(() => {
    fetchProduct && fetchProduct(product.id);
  }, [product.id]);

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title level={4} className={styles.title}>
            {product.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {product.ingredients.join(", ")}
          </Typography.Paragraph>
          <div className={styles.price}>{product.price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <Button.Group>
              <Button
                className={styles.button}
                icon="minus"
                onClick={decrement}
              />
              <Button
                className={styles.button}
                icon="plus"
                onClick={increment}
                data-id="product-increment-btn"
              />
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
  }).isRequired,
  fetchProduct: PropTypes.func,
  // from amount decorator
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

export default amount(Product);
