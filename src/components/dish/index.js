import React from "react";
import { Button, Card, Typography } from "antd";
import useAmount from "../../hooks/use-amount";

function Dish({ dish }) {
  const { amount, increment, decrement } = useAmount();

  return (
    <Card title={dish.name}>
      <Typography>{dish.ingredients.join(", ")}</Typography>
      <Typography.Text strong>{amount}</Typography.Text>
      <Button onClick={increment}>+</Button>
      <Button onClick={decrement}>-</Button>
    </Card>
  );
}

export default Dish;
