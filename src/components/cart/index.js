import React, { useState } from "react";
import { Button, Typography } from "antd";
import { connect } from "react-redux";
import { getOrder } from "./helpers";

function Cart({ order: { order, totalAmount, totalPrice } }) {
  const [isShowAll, setShowAll] = useState(false);

  const renderItem = ({ price, dish, amount }) => (
    <div key={`${dish}_${price}`}>
      <Typography.Text>{`dish: ${dish}`}</Typography.Text>
      <Typography.Text>{` price: ${price} `}</Typography.Text>
      <Typography.Text>{` amount: ${amount} `}</Typography.Text>
    </div>
  );
  return (
    <div>
      <Typography.Text>{`totalAmount: ${totalAmount} `}</Typography.Text>
      <Typography.Text>{` totalPrice: ${totalPrice}  `}</Typography.Text>
      <Button onClick={() => setShowAll(!isShowAll)}>
        {isShowAll ? "hide" : "show"}
      </Button>
      {isShowAll && order.map(renderItem)}
    </div>
  );
}

const mapStateToProps = state => ({
  order: getOrder(state.order)
});

export default connect(mapStateToProps)(Cart);
