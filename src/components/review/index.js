import React from "react";
import { Button, Card, Typography, Rate } from "antd";

function Review({ review }) {
  return (
    <Card title={review.user}>
      <Typography.Text strong>{review.text}</Typography.Text>
      <div>
        <Rate value={review.rating} />
      </div>
    </Card>
  );
}

export default Review;
