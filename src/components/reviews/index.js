import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";

function Reviews({ reviews, restaurantId, addReview }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(id => (
          <Review id={id} key={id} data-id="review-list-item" />
        ))}
        <ReviewForm restaurantId={restaurantId} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {
  restaurantId: PropTypes.string.isRequired,
  reviews: PropTypes.array
};

Reviews.defaultProps = {
  reviews: []
};

export default Reviews;
