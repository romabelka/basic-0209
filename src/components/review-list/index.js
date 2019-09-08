import React from "react";
import Review from "../review";

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
    </div>
  );
}

export default ReviewList;
