import React from "react";
import { Button, Col, Row, Typography } from "antd";
import styles from "./basket-item.module.css";

function BasketItem() {
  return (
    <Row type="flex" align="middle" className={styles.basketItem}>
      <Col span={12} align="left">
        <Typography.Text>Product Name</Typography.Text>
      </Col>
      <Col span={12} align="right">
        <div className={styles.counter}>
          <Button
            type="link"
            size="small"
            className={styles.button}
            icon="minus"
            onClick={() => {}}
          />
          <Typography.Text className={styles.count}>{42}</Typography.Text>
          <Button
            type="link"
            size="small"
            className={styles.button}
            icon="plus"
            onClick={() => {}}
          />
        </div>
      </Col>
    </Row>
  );
}

export default BasketItem;
