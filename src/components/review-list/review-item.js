import React from "react";
import { Card, Rate, Typography } from "antd";

function Review({ review }) {
  return (
    <Card title={review.user}>
      <Rate disabled defaultValue={review.rating} />
      <p>
        <Typography.Text>{review.text}</Typography.Text>
      </p>
    </Card>
  );
}

Review.propTypes = {};

export default Review;
