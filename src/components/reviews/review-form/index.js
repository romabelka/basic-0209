import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import useInput from "../../../hooks/use-input";
import PropTypes from "prop-types";
import Rate from "../../rate";
import styles from "./review-form.module.css";

const AddReview = () => {
  const [rate, setRate] = useState();
  const [text, setText, isValidText] = useInput();

  const handleSubmit = ev => {
    ev.preventDefault();
    console.log("submitted: ", rate, text);
  };

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form data-ut="form" onSubmit={handleSubmit}>
            <Form.Item>
              <Input.TextArea
                data-ut="review-text"
                rows={3}
                value={text}
                onChange={setText}
                size="large"
                className={{
                  [styles.invalid]: !isValidText
                }}
                autosize={{ minRows: 3, maxRows: 6 }}
              />
            </Form.Item>
            <div>
              Rating: <Rate value={rate} onChange={setRate} />
            </div>
            <Button
              htmlType="submit"
              data-ut="submit"
              className={styles.submitButton}
            >
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

AddReview.propTypes = {
  text: PropTypes.string,
  rate: PropTypes.number
};

export default AddReview;
