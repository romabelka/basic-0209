import React from "react";
import { Col, Row, Typography } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";

function Reviews({ restaurant }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {restaurant.reviews.map(id => (
          <Review id={id} key={id} data-id="review-list-item" />
        ))}
        <ReviewForm restaurantId={restaurant.id} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

export default Reviews;
