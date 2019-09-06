import React from "react";
import { Rate, Typography } from "antd";

function Review(props) {
  const { review } = props;

  return (
    <div>
      <div>
        <Rate value={review.rating} disabled />
      </div>
      <br />
      <Typography.Paragraph strong>{review.user}</Typography.Paragraph>
      <Typography.Paragraph>{review.text}</Typography.Paragraph>
    </div>
  );
}

export default Review;
