import React from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { mappedReviewsSelector } from "../../redux/selectors";
import { connect } from "react-redux";
import { addReview } from "../../redux/ac";

function Reviews({ restaurantId, reviews, onSubmit }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review {...review} key={review.id} data-id="review-list-item" />
        ))}
        <ReviewForm restaurantId={restaurantId} onSubmit={onSubmit} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

const mapStateToProps = (state, ownProps) => ({
  reviews: mappedReviewsSelector(state).filter(review =>
    ownProps.reviews.includes(review.id)
  )
});

const mapDispatchToProps = {
  onSubmit: addReview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
