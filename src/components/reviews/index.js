import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { connect } from "react-redux";
import { reviewsLoading, reviewsSelector } from "../../redux/selectors";
import { fetchReviews } from "../../redux/ac";
import Loader from "../loader";

function Reviews({ restaurant, reviews, loading, fetchReviews }) {
  useEffect(() => {
    fetchReviews(restaurant.id);
  }, [restaurant.id, fetchReviews]);

  if (loading) return <Loader />;

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

export default connect(
  state => ({
    reviews: reviewsSelector(state),
    loading: reviewsLoading(state)
  }),
  { fetchReviews }
)(Reviews);
