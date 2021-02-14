import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import i18n from "../../../contexts/i18n-context";
import useInput from "../../../hooks/use-input";
import cx from "classnames";

import Rate from "../../rate";
import { Card } from "../../card";
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
      <div>
        <h4 className={styles.addReviewTitle}>{t("leave_your_review")}</h4>
        <form onSubmit={handleSubmit} data-id="review-form">
          <div className={styles.reviewFormItem}>
            <textarea
              value={text}
              onChange={setText}
              className={cx(styles.message, {
                [styles.invalid]: !isValidText
              })}
              data-id="review-form-text"
            />
          </div>
          <div className={styles.rateWrap}>
            <span>{t("rating")}: </span>
            <span>
              <Rate
                value={rate}
                onChange={setRate}
                data-id="review-form-rate"
              />
            </span>
          </div>
          <button type="submit" className={styles.submitButton}>
            {t("publish_review")}
          </button>
        </form>
      </div>
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
