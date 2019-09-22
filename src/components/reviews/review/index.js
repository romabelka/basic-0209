import { Card, Col, Row, Typography } from "antd";
import React from "react";
import PropTypes from "prop-types";

import Rate from "../../rate";
import styles from "./review.module.css";
import { connect } from "react-redux";
import { reviewSelector } from "../../../redux/selectors";

const Review = ({ review: { user = "Anonymous", text, rating } }) => (
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

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number
  })
};

export default connect((state, props) => ({
  review: reviewSelector(state, props)
}))(Review);
