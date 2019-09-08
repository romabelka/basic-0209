import React from "react";
import { Row, Col, Card, Typography, Rate } from "antd";

function Review({feedback}) {
  return (
    <Card>
      <Row>
        <Col span={12}>
          <Typography.Title level={4}>
            {feedback.user}
          </Typography.Title>
        </Col>
        <Col span={12} style={{display: 'flex', justifyContent: 'flex-end'}}>
          <Rate value={feedback.rating} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Typography.Paragraph>{feedback.text}</Typography.Paragraph>
        </Col>
      </Row>
      
    </Card>
  );
}

export default Review;
