import { Col, Row, Typography } from "antd";
import React from "react";

import styles from "./basket-row.module.css";

function BasketRow({ align = "top", leftContent, rightContent }) {
  return (
    <Row type="flex" align={align} className={styles.basketRow}>
      <Col span={12} align="left">
        <Typography.Text>{leftContent}</Typography.Text>
      </Col>
      <Col span={12} align="right">
        <Typography.Text>{rightContent}</Typography.Text>
      </Col>
    </Row>
  );
}

export default BasketRow;
