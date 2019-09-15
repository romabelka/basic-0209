import React, { useState } from "react";
import { Button, Typography } from "antd";
import { connect } from "react-redux";

function Cart({ order, totalAmount, totalPrice }) {
  const [isShowAll, setShowAll] = useState(false);

  const renderItem = ({ id, price, name, amount }) => (
    <div key={id}>
      <Typography.Text>{`dish: ${name}`}</Typography.Text>
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

const mapStateToProps = state => {
  const order = Object.values(state.order);
  const totalAmount = order.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = order.reduce(
    (sum, item) => sum + item.amount * item.price,
    0
  );

  return {
    order,
    totalAmount,
    totalPrice
  };
};

export default connect(mapStateToProps)(Cart);
