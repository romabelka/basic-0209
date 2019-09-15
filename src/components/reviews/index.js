import React from "react";
import { Col, Row, Typography } from "antd";
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

export default connect(
  (state, props) => ({
    loading: reviewsLoadingSelector(state, props),
    loaded: reviewsLoadedSelector(state, props)
  }),
  { fetchReviews }
)(Reviews);
