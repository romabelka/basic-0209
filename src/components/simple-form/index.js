import React, { useState } from "react";
import { Typography, Rate, Button, Form } from "antd";
import useInput from "../../hooks/use-input";
import isReviewNameValid from "../../validators/review/isReviewNameValid";

function SimpleForm(props) {
  const { value: name, bind: bindName } = useInput("");
  const { value: review, bind: bindReview } = useInput("");
  const [rate, setRate] = useState(0);

  const { value, bind, reset, setState } = useInput("");

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        console.log(
          `Your review is done: Name: ${name} , Review: ${review}, Rate: ${rate}`
        );
      }}
    >
      <Typography.Title level={2}>Add your reivew</Typography.Title>
      <div>
        <label htmlFor="">Your name:</label>
        <input {...bindName} />
      </div>
      <div>
        <label htmlFor="">Your review:</label>
        <input {...bindReview} />
      </div>
      <div>
        <label htmlFor="">Your rate:</label>
        <Rate value={rate} onChange={value => setRate(value)} />
      </div>
      <Button type="primary" htmlType={"submit"}>
        Send
      </Button>
    </Form>
  );
}

export default SimpleForm;
