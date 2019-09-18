import React from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { connect } from "react-redux";
import { addReview } from "../../redux/ac";

function Reviews({ reviews, restaurantId, addReview }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review {...review} key={review.id} data-id="review-list-item" />
        ))}
        <ReviewForm
          onSubmit={(text, rate) => addReview(restaurantId, text, rate)}
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
