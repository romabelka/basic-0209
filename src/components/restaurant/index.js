import React from "react";
import { Typography } from "antd";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes, { restaurantType } from "../../prop-types";

function Restaurant({ restaurant }) {
  console.log(restaurant);
  return (
    <div>
      <Typography.Title>{restaurant.name}</Typography.Title>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape(restaurantType)
};

export default Restaurant;
