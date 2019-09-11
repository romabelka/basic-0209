import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import useInput from "../../../hooks/use-input";

import Rate from "../../rate";
import styles from "./review-form.module.css";

const AddReview = () => {
  const [rate, setRate] = useState();
  const [text, setText, isValidText] = useInput();
  const [btnCaption, setBtnCaption] = useState("PUBLISH REVIEW");

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log("submitted: ", rate, text);
    if (text) setBtnCaption("PUBLISHED");
  };

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Input.TextArea
                rows={3}
                value={text}
                onChange={setText}
                size="large"
                className={{
                  [styles.invalid]: !isValidText
                }}
                autosize={{ minRows: 3, maxRows: 6 }}
                data-id="add-review-textarea"
              />
            </Form.Item>
            <div>
              Rating: <Rate value={rate} onChange={setRate} />
            </div>
            <Button
              htmlType="submit"
              className={styles.submitButton}
              data-id="add-review-submit-btn"
            >
              {btnCaption}
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default AddReview;
