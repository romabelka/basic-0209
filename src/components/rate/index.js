import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";

import styles from "./rate.module.css";

import { StarIcon } from "./star-icon";

const Rate = ({ amount, value, onChange, disabled = false }) => (
  <div className={styles.wrapper}>
    <span
      onChange={onChange}
      className={cx({
        [styles.disabled]: disabled
      })}
    >
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
    </span>
    {amount && <span className={styles.amount}>({amount})</span>}
  </div>
);

Rate.propTypes = {
  amount: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default Rate;
