import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import useInput from "../../../hooks/use-input";

import Rate from "../../rate";
import styles from "./review-form.module.css";
import { connect } from "react-redux";
import { addReview } from "../../../redux/ac";
import langContext from "../../../contexts/language-context";
import texts from "../../../text-constants";

const AddReview = ({ onSubmit }) => {
  const [rate, setRate] = useState();
  const [text, setText, isValidText] = useInput();
  const { lang } = useContext(langContext);

  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit(text, rate);
  };

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            {texts[lang].LEAVE_REVIEW}
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
              {texts[lang].RATING}:{" "}
              <Rate
                value={rate}
                onChange={setRate}
                data-id="review-form-rate"
              />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              {texts[lang].PUBLISH_REVIEW}
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

AddReview.propTypes = {
  restaurantId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired
};

export default connect(
  null,
  (dispatch, props) => ({
    onSubmit: (text, rating) =>
      dispatch(addReview({ rating, text }, props.restaurantId))
  })
)(AddReview);
