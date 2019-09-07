import React from "react";
import Review from "../Review";

function ReviewList({ reviews }) {
  return (
    <div>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
