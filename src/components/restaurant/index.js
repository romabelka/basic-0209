import React from "react";
import { Typography } from "antd";
import Reviews from "../reviews";
import Menu from "../menu";

function Restaurant({ restaurant }) {
  return (
    <div>
      <Typography.Title>{restaurant.name}</Typography.Title>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}

export default Restaurant;
