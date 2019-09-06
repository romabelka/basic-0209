import React from "react";
import SimpleForm from "../simple-form";
import Review from "../review";

function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      {reviews &&
        reviews.map(review => <Review review={review} key={review.id} />)}
      <SimpleForm />
    </div>
  );
}

Reviews.propTypes = {};

export default Reviews;
