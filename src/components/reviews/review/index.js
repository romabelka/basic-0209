import React from "react";
import PropTypes from "prop-types";

import Rate from "../../rate";
import { Card } from "../../card";
import styles from "./review.module.css";
import animationStyles from "./review-animation.module.css";
import { connect } from "react-redux";
import { reviewSelector } from "../../../redux/selectors";
import { CSSTransition } from "react-transition-group";

const Review = ({ review: { user = "Anonymous", text, rating } }) => (
  <Card className={styles.review}>
    <CSSTransition timeout={500} classNames={animationStyles} in appear>
      <div className={styles.reviewInner}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rateColumn}>
          <Rate disabled value={rating} />
        </div>
      </div>
    </CSSTransition>
  </Card>
);

Review.propTypes = {
  review: PropTypes.shape({
    user: PropTypes.string,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })
};

export default connect((state, props) => ({
  review: reviewSelector(state, props)
}))(Review);
