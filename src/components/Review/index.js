import React from "react";
import { Icon, Rate, Typography, Card } from "antd";
import "./index.css";

function Review({ review }) {
  return (
    <Card
      type="inner"
      className="review-card"
      title={review.user}
      extra=<Icon
        className="review-rating-smile"
        theme="twoTone"
        type={getSmile(review.rating)}
      />
    >
      <Typography.Text> {review.text}</Typography.Text>
      <div>
        <Rate disabled defaultValue={review.rating} />
      </div>
    </Card>
  );
}

function getSmile(rating) {
  if (rating === 5) {
    return "smile";
  } else if (rating >= 3 && rating < 5) {
    return "meh";
  } else return "frown";
}

export default Review;
