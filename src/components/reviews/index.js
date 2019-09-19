import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { addReview } from "../../redux/ac";

function Reviews({ restaurant, reviews, onSubmit }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review {...review} key={review.id} data-id="review-list-item" />
        ))}
        <ReviewForm onSubmit={(...args) => onSubmit(...args, restaurant.id)} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: ownProps.restaurant.reviews.map(
      reviewId => state.reviews[reviewId]
    )
  };
};

const mapDispatchToProps = {
  onSubmit: (text, rating, restaurantId) =>
    addReview({ text, rating, restaurantId })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
