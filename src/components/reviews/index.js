import React from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";

function Reviews({ reviews }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review {...review} key={review.id} />
        ))}
        <ReviewForm />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

export default Reviews;
