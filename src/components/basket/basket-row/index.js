import { Col, Row, Typography } from "antd";
import React from "react";

import styles from "./basket-row.module.css";

function BasketRow({ align = "top", leftContent, rightContent, bold = false }) {
  return (
    <Row type="flex" align={align} className={styles.basketRow}>
      <Col span={12} align="left">
        <Typography.Text strong={bold && bold}>{leftContent}</Typography.Text>
      </Col>
      <Col span={12} align="right">
        <Typography.Text strong={bold && bold}>{rightContent}</Typography.Text>
      </Col>
    </Row>
  );
}

export default BasketRow;
