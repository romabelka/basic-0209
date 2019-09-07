import React from "react";
import { Card, Rate, Col } from "antd";

function Review({ review }) {
  return (
    <Col span={8}>
      <Card title={review.user} style={{ margin: "10px" }}>
        <p>{review.text}</p>
        <Rate value={review.rating} />
      </Card>
    </Col>
  );
}

export default Review;
