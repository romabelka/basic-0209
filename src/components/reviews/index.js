import React from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { connect } from "react-redux";
import { addReview } from "../../redux/ac";

function Reviews({ id, reviews, addReview }) {
  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {reviews.map(id => (
          <Review id={id} key={id} data-id="review-list-item" />
        ))}
        <ReviewForm id={id} onSubmit={addReview} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

const mapStateToProps = (storeState, ownProps) => ({
  reviews: storeState.restaurants[ownProps.id]["reviews"]
});

const mapDispatchToProps = {
  addReview: addReview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
