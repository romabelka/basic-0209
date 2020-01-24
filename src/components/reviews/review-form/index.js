import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import i18n from "../../../contexts/i18n-context";
import useInput from "../../../hooks/use-input";

import Rate from "../../rate";
import styles from "./review-form.module.css";
import { connect } from "react-redux";
import { addReview } from "../../../redux/ac";

const AddReview = ({ onSubmit }) => {
  const [rate, setRate] = useState();
  const [text, setText, isValidText] = useInput();
  const { t } = useContext(i18n);

  const handleSubmit = ev => {
    ev.preventDefault();
    onSubmit(text, rate);
  };

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            {t("leave_your_review")}
          </Typography.Title>
          <Form
            onSubmit={handleSubmit}
            data-id="review-form"
            className={styles.reviewForm}
          >
            <Form.Item className={styles.reviewFormItem}>
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
            <div className={styles.rateWrap}>
              {t("rating")}:{" "}
              <Rate
                value={rate}
                onChange={setRate}
                data-id="review-form-rate"
              />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              {t("publish_review")}
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
