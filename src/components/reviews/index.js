import React, { useEffect } from "react";
import { Col, Row, Skeleton } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { reviewsLoading } from "./../../redux/selectors/index";
import { connect } from "react-redux";
import { fetchReviews } from "../../redux/ac";

function Reviews({ restaurant, loading, fetchReviews }) {
  useEffect(() => {
    fetchReviews(restaurant.id);
  }, [restaurant.id, fetchReviews]);

  return (
    <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
      <Col xs={24} md={16}>
        {restaurant.reviews.map(id =>
          loading ? (
            <Skeleton active key={id} />
          ) : (
            <Review id={id} key={id} data-id="review-list-item" />
          )
        )}
        <ReviewForm restaurantId={restaurant.id} />
      </Col>
    </Row>
  );
}

Reviews.propTypes = {};

export default connect(
  state => ({
    loading: reviewsLoading(state)
  }),
  { fetchReviews }
)(Reviews);
