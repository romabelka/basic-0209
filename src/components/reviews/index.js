import React from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";

function Reviews({ reviews, restaurant: { id: restaurantId } }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review review={review} key={review.id} data-id="review-list-item" />
        ))}
        <ReviewForm restaurantId={restaurantId} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

export default Reviews;
