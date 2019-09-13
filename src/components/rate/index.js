import { Rate as AntRate } from "antd";
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

export default Rate;
