import React, { useState } from "react";
import { Input, Rate, Typography } from "antd";
import withValidationForEmpty from "../../decorators/with-validation-for-empty";

function SimpleForm({ validateForEmpty }) {
  const [review, setReview] = useState("");
  const [rate, setRate] = useState(0);
  const {
    message: reviewValidMessage,
    validate: validateReview
  } = validateForEmpty();
  const {
    message: rateValidMessage,
    validate: validateRate
  } = validateForEmpty("Дайте свою оценку, пожалуйста");
  const { TextArea } = Input;

  return (
    <form>
      <Typography.Title level={4}>Add your review:</Typography.Title>
      <Rate
        allowHalf
        defaultValue={rate}
        onChange={value => {
          setRate(value);
          validateRate(value);
        }}
      />
      <p>{rateValidMessage}</p>
      <TextArea
        rows={2}
        value={review}
        onChange={evt => {
          setReview(evt.target.value);
          validateReview(evt.target.value);
        }}
      />
      <p>{reviewValidMessage}</p>
    </form>
  );
}

export default withValidationForEmpty(SimpleForm);
