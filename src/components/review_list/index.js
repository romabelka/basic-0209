import React from "react";
import { Card, Typography } from "antd";

function ReviewList({ reviewL }) {
  return (
    <Card title={reviewL.user}>
      <Typography>{reviewL.text}</Typography>
      <Typography>{reviewL.rating}</Typography>
    </Card>
  );
}

export default ReviewList;
