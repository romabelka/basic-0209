import React from "react";
import { Card, Typography, Rate } from "antd";

function Review({ review }) {
  return (
    <Card title={review.user}>
      <Typography.Text strong>{review.text}</Typography.Text>
      <div>
        <Rate value={review.rating} disabled={true} />
      </div>
    </Card>
  );
}

export default Review;
