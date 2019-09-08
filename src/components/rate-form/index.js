import React, { useState } from "react";
import { Button, Input, Rate } from "antd";

function RateForm(props) {
  const [review, setReview] = useState("Your review...");
  const { TextArea } = Input;

  return (
    <div>
      add your review:{" "}
      <TextArea
        placeholder={review}
        rows={4}
        onChange={message => setReview(console.log(message.target.value))}
      />
      <Rate disabled defaultValue={2} />
      <Button onClick={handleClick}>Send</Button>
    </div>
  );
}

function handleClick() {
  console.log("---", "clicked");
}

export default RateForm;
