import React from "react";
import SimpleForm from "../simple-form";
import RateForm from "../rate-form";
import ReviewList from "../review_list";

function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map(reviewL => (
        <ReviewList reviewL={reviewL} key={reviewL.id} />
      ))}
      <SimpleForm />

      <RateForm />
    </div>
  );
}

export default Reviews;
