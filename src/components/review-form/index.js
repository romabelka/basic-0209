import React from "react";
import { Input, Rate, Row, Col } from "antd";
import useReviewInput from "../../hooks/use-review-input";

function SimpleForm() {
  const {
    name,
    setName,
    review,
    setReview,
    rateValue,
    setRateValue,
    validate
  } = useReviewInput();

  const onSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log(
        name,
        review,
        rateValue,
        " <--- name, review, rateValue | Validate Good!"
      );
    } else {
      console.log("Sorry, not validate");
    }
    setName("");
    setReview("");
    setRateValue(0);
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
          <Rate onChange={setRateValue} value={rateValue} />
          <Input type="submit" value="Submit" />
        </form>
      </Col>
    </Row>
  );
}

export default SimpleForm;
