import React, { useState } from "react";
import { Form, Input, Rate, Button, Typography } from "antd";
import useValidated from "../../hooks/use-validated";

function ReviewForm(props) {
  const [name, setName] = useValidated(
    "",
    value => value.match(/^[\w ]*$/) && value.length < 25
  );
  const [text, setText] = useValidated("", value => value.length < 150);
  const [rating, setRating] = useState(0);

  return (
    <Form
      onSubmit={ev => {
        ev.preventDefault();
        console.log("--- form submitted with ---", { name, text, rating });
      }}
      className="review-form"
      layout="vertical"
    >
      <Typography.Title level={3}>Post your review</Typography.Title>
      <Form.Item>
        <Input
          value={name}
          placeholder="Your name"
          onChange={({ target: { value } }) => setName(value)}
        />
      </Form.Item>
      <Form.Item>
        <Input.TextArea
          value={text}
          placeholder="Your review"
          onChange={({ target: { value } }) => setText(value)}
        />
      </Form.Item>
      <Form.Item>
        <Rate onChange={setRating} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="review-form-button">
          Post review
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ReviewForm;
