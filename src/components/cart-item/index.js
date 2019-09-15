import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";
import "./cart-item.css";

export const CartItem = ({ caption, price, count }) => {
  return (
    <div className="cart-item">
      <Typography.Text underline className="cart-item__caption">
        {caption}
      </Typography.Text>
      <Typography.Text>{price} $</Typography.Text>
      <Typography.Text strong>{count}</Typography.Text>
    </div>
  );
};

CartItem.propTypes = {
  caption: PropTypes.string,
  price: PropTypes.number,
  count: PropTypes.number
};
