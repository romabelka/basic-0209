import React from "react";
import { Typography } from "antd";
import Reviews from "../reviews";
import Menu from "../menu";

function Restaurant({ restaurant }) {
  return (
    <div>
      <Typography.Title>{restaurant.name}</Typography.Title>
      <Reviews reviews={restaurant.reviews} />
      <Menu menu={restaurant.menu} />
    </div>
  );
}

export default Restaurant;
