import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import PropTypes from "prop-types";
import useInput from "../../../hooks/use-input";

import Rate from "../../rate";
import styles from "./review-form.module.css";
import { connect } from "react-redux";
import { saveReview, saveToRestaurant } from "../../../redux/ac";

const AddReview = ({ onSubmitSaveReview, restaurant }) => {
  const [rate, setRate] = useState();
  const [text, setText, isValidText] = useInput();

  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmitSaveReview(text, rate, restaurant);
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
  onSubmitSaveReview: PropTypes.func.isRequired
};

const mapStateToProps = (storeState, ownProps) => {
  return {};
};

const mapDispatchToProps = {
  onSubmitSaveReview: saveReview
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReview);
