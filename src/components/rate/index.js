import { Rate as AntRate } from "antd";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";

import styles from "./rate.module.css";

const Rate = ({ amount, value, onChange, sm = false, disabled = false }) => (
  <>
    <AntRate
      disabled={disabled}
      onChange={onChange}
      value={value}
      className={cx(styles.customRate, {
        [styles.customRateSm]: sm,
        [styles.disabled]: disabled
      })}
    />
    {amount && <span className="ant-rate-text">({amount})</span>}
  </>
);

Rate.propTypes = {
  amount: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

export default Rate;
