import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { increment, decrement } from "../../../redux/ac";
import styles from "./basket-item.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function BasketItem({ product, amount, restaurant, increment, decrement }) {
  console.log("BasketItem", restaurant.id);
  return (
    <Row type="flex" align="middle" className={styles.basketItem}>
      <Col span={12} align="left">
        <Link to={`/restaurants/${restaurant.id}`}>
          <Typography.Text>{product.name}</Typography.Text>
        </Link>
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
  );
}

export default connect(
  null,
  { increment, decrement }
)(BasketItem);
