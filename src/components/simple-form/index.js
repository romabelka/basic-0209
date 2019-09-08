import React from "react";
import { Rate, Input, Typography } from "antd";
import useInput from "../../hooks/use-input";

function SimpleForm(props) {
  const [review, setReview] = useInput(
    "",
    value => value.length > 0 && value.length <= 10
  );
  const [rate, setRate] = useInput(0, value => value > 0);
  return (
    <div>
      <Typography.Title level={4}>Add your review</Typography.Title>
      <Rate value={rate} onChange={value => setRate(value)} />
      <Input.TextArea
        value={review}
        onChange={ev => setReview(ev.target.value)}
      />
    </div>
  );
}

export default SimpleForm;
