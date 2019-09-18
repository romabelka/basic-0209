import React from "react";
import { Col, Row } from "antd";
import { connect } from "react-redux";
import Review from "./review";
import ReviewForm from "./review-form";
import { addReview } from "../../redux/ac";

function Reviews({ reviews, restaurantId, addReview }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(reviewId => (
          <Review id={reviewId} key={reviewId} data-id="review-list-item" />
        ))}
        <ReviewForm
          onSubmit={(text, rating) => addReview({ text, rating, restaurantId })}
        />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

export default connect(
  null,
  { addReview }
)(Reviews);
