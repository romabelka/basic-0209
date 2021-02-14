import React from "react";
import PropTypes from "prop-types";

import styles from "./rate.module.css";

import { StarIcon } from "./star-icon";

const Rate = ({ amount, value, onChange, disabled = false }) => (
  <div className={styles.wrapper}>
    <span onChange={onChange}>
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          checked={i <= value - 1}
          onClick={() => onChange(i + 1)}
          disabled={disabled}
        />
      ))}
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
