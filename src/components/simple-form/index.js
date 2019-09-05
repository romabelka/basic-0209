import React, { useState } from "react";
import { Button, Input, Rate } from "antd";

function SimpleForm(props) {
  const [rate, setRate] = useState(null);
  const [review, setReview] = useState("");
  const { TextArea } = Input;
  const handleSubmit = ev => {
    ev.preventDefault();
    console.log("form", { rate, review });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Rate value={rate} onChange={ev => setRate(ev.valueOf())} />
      <TextArea
        value={review}
        placeholder="add your review"
        rows={4}
        onChange={ev => setReview(ev.target.value)}
      />
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </form>
  );
}

export default SimpleForm;
