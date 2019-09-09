import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import amount from "../../decorators/amount";
import styles from "./product.module.css";

function Product({ dish: product, amount, increment, decrement }) {
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
            <div className={styles.count}>{amount}</div>
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
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default amount(Product);
