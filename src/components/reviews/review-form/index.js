import { Button, Card, Col, Form, Input, Row, Typography, message } from "antd";
import React, { useState } from "react";
import useInput from "../../../hooks/use-input";

import Rate from "../../rate";
import styles from "./review-form.module.css";

const AddReview = props => {
  const [rate, setRate] = useState();
  const [text, setText, isValidText] = useInput();
  const handleSubmit = ev => {
    ev.preventDefault();
    isValidText ? console.log("submitted: ", rate, text) : error();
  };

  const error = () => {
    message.error("Please, enter review text");
  };

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Item className={styles.inputWrap}>
              <Input.TextArea
                data-id="review-input"
                rows={3}
                value={text}
                onChange={setText}
                size="large"
                className={{
                  [styles.invalid]: !isValidText
                }}
                autosize={{ minRows: 3, maxRows: 6 }}
              />
              {!isValidText && (
                <span data-id="review-error" className={styles.notification}>
                  This field is required
                </span>
              )}
            </Form.Item>
            <div>
              Rating: <Rate value={rate} onChange={setRate} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default AddReview;
