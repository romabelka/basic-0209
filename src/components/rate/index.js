import { Rate as AntRate } from "antd";
import propTypes from "prop-types";
import cx from "classnames";
import React from "react";

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
  amount: propTypes.number,
  value: propTypes.number,
  onChange: propTypes.func,
  disabled: propTypes.bool
};

export default Rate;
