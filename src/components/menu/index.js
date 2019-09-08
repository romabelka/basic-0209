import React from "react";
import Dish from "../dish";
import { Typography } from "antd";

function Menu({ menu }) {
  return (
    <div>
      <Typography.Title level={2}>Menu</Typography.Title>
      {menu.map(dish => (
        <Dish dish={dish} key={dish.id} />
      ))}
    </div>
  );
}

export default Menu;
