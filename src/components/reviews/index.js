import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { connect } from "react-redux";
import { fetchReviews } from "../../redux/ac";
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector
} from "../../redux/selectors";
import Loader from "../loader";

function Reviews({ restaurant, loading, loaded, fetchReviews }) {
  useEffect(() => {
    fetchReviews(restaurant.id);
  }, [fetchReviews, restaurant.id]);

  if (!loaded || loading) return <Loader />;

  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={20} lg={18}>
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
  (state, props) => ({
    loading: reviewsLoadingSelector(state, props),
    loaded: reviewsLoadedSelector(state, props)
  }),
  { fetchReviews }
)(Reviews);
