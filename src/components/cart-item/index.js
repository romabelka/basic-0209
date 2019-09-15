import React from "react";
import { Typography } from "antd";
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
