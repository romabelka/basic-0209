import React from "react";
import { Rate, Input, Button, Typography } from "antd";
import reviewDecorator from "../../decorators/review";

function SimpleForm(props) {
  const { comment, isShowError, showError, changeReview, changeRate } = props;
  const { review, rate, errors } = comment;

  const handleSubmit = () => console.log(comment);

  const handleClick = () => {
    handleSubmit();
    showError();
  };

  return (
    <div>
      <Typography.Text strong>add your review: </Typography.Text>
      <Rate value={rate} onChange={changeRate} />
      <Input.TextArea
        placeholder="review"
        value={review}
        onChange={changeReview}
        rows={4}
      />
      {isShowError && <Typography.Text>{errors.join(",")}</Typography.Text>}
      <Button block onClick={handleClick}>
        add
      </Button>
    </div>
  );
}

export default reviewDecorator(SimpleForm);
