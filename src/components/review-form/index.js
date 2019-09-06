import React from "react";
import { Input, Typography, Rate, Button } from "antd";
import useReviewForm from "../../hooks/use-review-form.js";

function ReviewForm() {
  const {
    rating,
    userName,
    review,
    setUserName,
    setRating,
    setReview,
    validate,
    isValid
  } = useReviewForm();

  const sendReview = () => {
    if (validate()) {
      return console.log("Valid!");
    }

    return console.log("Is not valid!");
  };

  return (
    <div style={{ width: "300px", margin: "20px 20px 40px" }}>
      <Typography.Paragraph style={{ color: isValid ? "inherit" : "red" }}>
        {isValid ? "Add your review:" : "Fields can't be empty"}
      </Typography.Paragraph>
      <Rate
        value={rating}
        onChange={val => setRating(val)}
        style={{ margin: "10px 0", float: "right" }}
      />
      <Input
        value={userName}
        onChange={ev => setUserName(ev.target.value)}
        placeholder={"Your Name"}
      />
      <Input.TextArea
        value={review}
        onChange={ev => setReview(ev.target.value)}
        placeholder={"Review"}
        rows={2}
        style={{ margin: "10px 0 0" }}
      />
      <Button
        onClick={sendReview}
        type="primary"
        style={{ margin: "10px 0", float: "right" }}
      >
        Send
      </Button>
      <div style={{ clear: "both" }} />
    </div>
  );
}

export default ReviewForm;
