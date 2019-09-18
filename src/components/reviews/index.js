import React from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { connect } from "react-redux";

function Reviews({ reviews, restaurant }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(review => (
          <Review id={review} key={review} data-id="review-list-item" />
        ))}
        <ReviewForm restaurant={restaurant} onSubmit={() => {}} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

const mapStateToProps = (storeState, ownProps) => {
  return {
    reviews: ownProps.reviews
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
