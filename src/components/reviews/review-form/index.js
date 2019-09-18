import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import useInput from "../../../hooks/use-input";
import { submitReview } from "./../../../redux/ac/index";

import Rate from "../../rate";
import styles from "./review-form.module.css";

const AddReview = ({ onSubmit, restaurantId }) => {
  const [rate, setRate] = useState();
  const [text, setText, isValidText, resetText] = useInput();

  const handleSubmit = ev => {
    ev.preventDefault();
    if (!isValidText) return;
    onSubmit(text, rate, restaurantId);
    setRate(0);
    resetText();
  };

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit} data-id="review-form">
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
                data-id="review-form-text"
              />
            </Form.Item>
            <div>
              Rating:{" "}
              <Rate
                value={rate}
                onChange={setRate}
                data-id="review-form-rate"
              />
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

AddReview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  restaurantId: PropTypes.string
};

export default connect(
  null,
  { onSubmit: submitReview }
)(AddReview);
