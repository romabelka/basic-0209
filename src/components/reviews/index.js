import React, { useEffect } from "react";
import { Col, Row } from "antd";
import Review from "./review";
import ReviewForm from "./review-form";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { fetchReviews } from "../../redux/ac";
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector
} from "../../redux/selectors";
import Loader from "../loader";
import "./reviews.css";

function Reviews({ restaurant, loading, loaded, fetchReviews }) {
  useEffect(() => {
    fetchReviews(restaurant.id);
  }, [fetchReviews, restaurant.id]);

  if (!loaded || loading) return <Loader />;

  return (
    <CSSTransition
      in={true}
      timeout={1000}
      classNames="reviews-animation"
      appear
    >
      <Row type="flex" justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
        <Col xs={24} md={16}>
          <TransitionGroup>
            {restaurant.reviews.map(id => (
              <CSSTransition
                timeout={500}
                classNames="reviews-item-animation"
                key={id}
              >
                <Review id={id} key={id} data-id="review-list-item" />
              </CSSTransition>
            ))}
          </TransitionGroup>
          <ReviewForm restaurantId={restaurant.id} />
        </Col>
      </Row>
    </CSSTransition>
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
