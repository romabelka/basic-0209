import React, { useState } from "react";
import { Typography, Rate, Button, Form } from "antd";

function SimpleForm(props) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rate, setRate] = useState(0);
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        console.log("submit");
      }}
    >
      <Typography.Title level={2}>Add your reivew</Typography.Title>
      <div>
        <label htmlFor="">Your name:</label>
        <input value={name} onChange={ev => setName(ev.target.value)} />
      </div>
      <div>
        <label htmlFor="">Your review:</label>
        <input value={review} onChange={ev => setReview(ev.target.value)} />
      </div>
      <div>
        <label htmlFor="">Your rate:</label>
        <Rate value={rate} />
      </div>
      <Button type="primary" htmlType={"submit"}>
        Send
      </Button>
    </Form>
  );
}

export default SimpleForm;
