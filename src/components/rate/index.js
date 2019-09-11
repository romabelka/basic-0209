import { Rate as AntRate } from "antd";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";

import styles from "./rate.module.css";

const Rate = ({ amount, value, onChange, disabled = false }) => (
  <>
    <AntRate
      disabled={disabled}
      onChange={onChange}
      value={value}
      className={cx(styles.customRate, {
        [styles.disabled]: disabled
      })}
    />
    {amount && <span className="ant-rate-text">({amount})</span>}
  </>
);

Rate.propTypes = {
  amount: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Rate;
