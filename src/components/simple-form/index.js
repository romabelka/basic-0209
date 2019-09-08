import React, { useState } from "react";
import { Input, Rate, Form, Button, Card, Typography } from "antd";
import ValidateInput from "../../hooks/validate-input";

function SimpleForm(props) {
  const [review, setReview] = ValidateInput(review =>
    /^([a-zA-Z0-9_-]){1,150}$/.test(review)
  );
  const [rate, setRate] = useState();
  const [name, setName] = useState();

  return (
    <Card>
      <Typography.Text>Add your review: </Typography.Text>

      <Form layout="vertical">
        <Form.Item>
          <Rate value={rate} onChange={rate => setRate(rate)} />
        </Form.Item>
        <Form.Item>
          <Input
            style={{ width: 500 }}
            placeholder="Your Name"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            style={{ width: 500 }}
            placeholder="Your review"
            value={review}
            onChange={ev => setReview(ev.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default SimpleForm;
