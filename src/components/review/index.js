import React from "react";
import { Card, Rate } from "antd";

function Review({ review }) {
  return (
    <Card title={review.user} style={{ margin: "10px" }}>
      <p>{review.text}</p>
      <Rate value={review.rating} />
    </Card>
  );
}

export default Review;
