import React, { useState } from "react";
import { Input, Rate, Row, Col } from "antd";
import useReviewInput from "../../hooks/use-review-input";

function SimpleForm() {
  const [name, setName] = useReviewInput(
    "",
    name => typeof name === "string" && name.length < 10
  );
  const [review, setReview] = useReviewInput(
    "",
    review => typeof review === "string"
  );
  const [rate, setRate] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    console.log(name, review, rate, " <--- name, review, rateValue");
    setName("");
    setReview("");
    setRate(0);
    alert("Thank you!");
  };

  return (
    <Row style={{ background: "#f6f8fa", padding: "30px" }}>
      <Col span={16}>
        <form onSubmit={onSubmit} style={{ padding: "30px" }}>
          Add your name:
          <Input
            type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          Add your review:
          <Input.TextArea
            type="text"
            value={review}
            onChange={ev => setReview(ev.target.value)}
          />
          <Rate onChange={setRate} value={rate} />
          <Input type="submit" value="Submit" />
        </form>
      </Col>
    </Row>
  );
}

export default SimpleForm;
