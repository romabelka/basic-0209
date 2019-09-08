import React from "react";
import { Rate, Typography } from "antd";

function Review({ review }) {
  return (
    <Typography.Paragraph>
      <Typography.Text strong>{review.user}</Typography.Text>
      <br />
      <Rate disabled defaultValue={review.rating} />
      <Typography>{review.text}</Typography>
    </Typography.Paragraph>
  );
}

export default Review;
