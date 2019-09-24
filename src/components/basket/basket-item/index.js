import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row, Typography } from "antd";
import { increment, decrement } from "../../../redux/ac";
import styles from "./basket-item.module.css";
import { connect } from "react-redux";

function BasketItem({ product, amount, increment, decrement }) {
  return (
    <Link to={`/restaurants/${product.restaurantId}`}>
      <Row type="flex" align="middle" className={styles.basketItem}>
        <Col span={12} align="left">
          <Typography.Text>{product.name}</Typography.Text>
        </Col>
        <Col span={12} align="right">
          <div className={styles.counter}>
            <Button
              type="link"
              size="small"
              className={styles.button}
              icon="minus"
              onClick={() => decrement(product.id)}
            />
            <Typography.Text className={styles.count}>{amount}</Typography.Text>
            <Button
              type="link"
              size="small"
              className={styles.button}
              icon="plus"
              onClick={() => increment(product.id)}
            />
          </div>
        </Col>
      </Row>
    </Link>
  );
}

export default connect(
  null,
  { increment, decrement }
)(BasketItem);
