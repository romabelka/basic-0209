import React from "react";
import SimpleForm from "../simple-form";
import ReviewList from "../review-list";

function Reviews({ reviews }) {
  return (
    <div>
      <h1>Reviews</h1>
      <SimpleForm />
      <ReviewList reviews={reviews} />
    </div>
  );
}

Reviews.propTypes = {};

export default Reviews;
