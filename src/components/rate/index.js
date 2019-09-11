import { Rate as AntRate } from "antd";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";

import styles from "./rate.module.css";

const Rate = ({ amount, value, onChange, disabled }) => (
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

Rate.prototypes = {
  amount: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
};

Rate.defaultProps = {
  disabled: false
};

export default Rate;
