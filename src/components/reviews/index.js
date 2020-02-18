import React, { useEffect } from "react";
import { Container } from "../container";
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
    <Container>
      {restaurant.reviews.map(id => (
        <Review id={id} key={id} data-id="review-list-item" />
      ))}
      <ReviewForm restaurantId={restaurant.id} />
    </Container>
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
