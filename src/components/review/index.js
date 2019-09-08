import React from "react";
import { Rate, Comment } from "antd";

function Review({ review }) {
  return (
    <Comment
      author={review.user}
      content={review.text}
      actions={[<Rate disabled defaultValue={review.rating} />]}
    />
  );
}

export default Review;
