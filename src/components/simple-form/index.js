import React from "react";
import { Typography, Form, Row, Col, Input, Rate, Button, message } from "antd";
import {
  useValidateRateForm,
  useValidateMinLength,
  useRateValue
} from "../../hooks/use-validate-rate-form";

function SimpleForm() {
  const { setInputReviewText, reviewText } = useValidateRateForm();
  const { validate, isValid } = useValidateMinLength();
  const { setRateValue, rateValue } = useRateValue();

  function onChangeTextArea(event) {
    const { value } = event.target;
    setInputReviewText(value);
    validate(value);
  }

  function onSubmit(event) {
    event.preventDefault();
    message.success(
      `Success! Review text: ${reviewText} + Review rate: ${rateValue}`
    );
  }

  function onChangeRate(value) {
    setRateValue(value);
  }

  return (
    <div>
      <Row>
        <Col span={12} offset={6}>
          <Typography.Title level={4}>add your review</Typography.Title>
          <Form layout="vertical" onSubmit={onSubmit}>
            <Form.Item
              validateStatus={isValid ? "" : "error"}
              help={isValid ? "" : "Should be min length 5 letters"}
            >
              <Input.TextArea
                rows={4}
                value={reviewText}
                onChange={onChangeTextArea}
              />

              <Rate onChange={onChangeRate} value={rateValue} />
              <br />
              <Button htmlType="submit" disabled={!isValid}>
                Send
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default SimpleForm;
