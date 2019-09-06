import React from "react";
import SimpleForm from "../simple-form";
import Review from "../review";

function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      <SimpleForm />

      <div style={{ background: "#f6f8fa", padding: "30px" }}>
        {reviews.map(review => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
