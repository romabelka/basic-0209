import React, { useEffect } from "react";
import { Col, Row, Empty } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { fetchReviews } from "../../redux/ac";
import { connect } from "react-redux";
import Loader from "../loader";

function Reviews({ restaurant, fetchReviews }) {
  useEffect(() => {
    const { reviewsLoading, reviewsLoaded } = restaurant;
    if (!reviewsLoaded && !reviewsLoading) fetchReviews();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurant.id]);

  if (restaurant.reviewsLoading) return <Loader type="medium" />;

  if (!restaurant.reviewsLoaded) return <Empty />;

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
  () => ({}),
  (dispatch, { restaurant }) => ({
    fetchReviews: () => dispatch(fetchReviews(restaurant.id))
  })
)(Reviews);
