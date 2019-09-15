import React from "react";
import { Col, Row, Typography } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";

function Reviews({ reviews }) {
  return (
    <>
      <Typography.Title level={3}>Reviews</Typography.Title>
      <Row
        type="flex"
        justify="space-between"
        gutter={{ xs: 8, sm: 16, md: 24 }}
      >
        <Col xs={24} md={16}>
          {reviews.map(review => (
            <Review {...review} key={review.id} data-id="review-list-item" />
          ))}
          <ReviewForm onSubmit={() => {}} />
        </Col>
      </Row>
    </>
  );
}

Reviews.propTypes = {};

export default Reviews;
