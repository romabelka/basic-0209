import { Card, Col, Row, Typography } from "antd";
import React from "react";

import Rate from "../../rate";
import styles from "./review.module.css";

const Review = ({ user, text, rating }) => (
  <Card className={styles.review}>
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title
          data-id="review-name"
          className={styles.name}
          level={4}
        >
          {user}
        </Typography.Title>
        <Typography.Text data-id="review-text" className={styles.comment}>
          {text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={6} align="right" className={styles.rateColumn}>
        <Rate data-id="review-rate" disabled value={rating} />
      </Col>
    </Row>
  </Card>
);

Review.defaultProps = {
  user: "Anonymous"
};

export default Review;
