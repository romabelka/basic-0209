import React from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";

function Reviews({ reviews }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(id => (
          <Review key={id} id={id} data-id="review-list-item" />
        ))}
        <ReviewForm onSubmit={() => {}} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

export default Reviews;
