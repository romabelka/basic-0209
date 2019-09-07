import React, { useState } from "react";
import SimpleForm from "../simple-form";
import ReviewList from "../review-list";
import { Card } from "antd";
import "./index.css";

function useReviewsState(initValue) {
  const [state, setState] = useState(initValue);

  const cbAddReview = review => {
    const newState = [].concat(review, state);
    setState(newState);
  };

  return { cbAddReview, reviews: state };
}

function Reviews(props) {
  const { cbAddReview, reviews } = useReviewsState(props.reviews.slice());

  return (
    <div>
      <Card className="reviews-area" title="Feedback">
        <SimpleForm cbAddReview={cbAddReview} />
        <ReviewList reviews={reviews} />
      </Card>
    </div>
  );
}

Reviews.propTypes = {};

export default Reviews;
