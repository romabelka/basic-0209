import React from "react";
import { Button, Card, Typography } from "antd";
import amount from "../../decorators/with-calculate-amount";

function Dish({ dish, amount, increment, decrement }) {
  return (
    <Card title={dish.name}>
      <Typography>{dish.ingredients.join(", ")}</Typography>
      <Typography.Text strong>{amount}</Typography.Text>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </Card>
  );
}

export default amount(Dish);
