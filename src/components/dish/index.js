import React from "react";
import { Button, Card, Typography } from "antd";

function Dish({ dish }) {
  return (
    <Card title={dish.name}>
      <Typography>{dish.ingredients.join(", ")}</Typography>
      <Typography.Text strong>0</Typography.Text>
      <Button>+</Button>
      <Button>-</Button>
    </Card>
  );
}

export default Dish;
