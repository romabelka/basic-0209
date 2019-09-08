import React from "react";
import SimpleForm from "../simple-form";
import { Typography, Card, Rate } from "antd";

const getCardTitle = review => (
  <div>
    {review.user}
    <Rate allowHalf disabled defaultValue={review.rating} />
  </div>
);

function Reviews({ reviews }) {
  return (
    <div>
      <Typography.Title level={2}>Reviews</Typography.Title>
      {reviews.map(review => (
        <Card title={getCardTitle(review)} key={review.id}>
          <Typography.Paragraph>{review.text}</Typography.Paragraph>
        </Card>
      ))}
      <SimpleForm />
    </div>
  );
}

export default Reviews;
