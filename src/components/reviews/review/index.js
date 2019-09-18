import { Card, Col, Row, Typography } from "antd";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Rate from "../../rate";
import styles from "./review.module.css";

const Review = ({ user, text, rating }) => (
  <Card className={styles.review}>
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title
          className={styles.name}
          level={4}
          data-id="review-user"
        >
          {user}
        </Typography.Title>
        <Typography.Text className={styles.comment} data-id="review-text">
          {text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={6} align="right" className={styles.rateColumn}>
        <Rate disabled value={rating} />
      </Col>
    </Row>
  </Card>
);

Review.defaultProps = {
  user: "Anonymous"
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const mapStateToProps = (storeState, { id }) => {
  const review = storeState.reviews[id];
  const user = review.userId && storeState.users[review.userId].name;

  return {
    text: review.text,
    rating: review.rating,
    user
  };
};

export default connect(mapStateToProps)(Review);
