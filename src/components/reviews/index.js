import React from "react";
import SimpleForm from "../simple-form";
import Review from "./../review/index";

function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map(review => (
        <Review review={review} key={review.id} />
      ))}
      <SimpleForm />
    </div>
  );
}

export default Reviews;
