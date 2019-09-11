import React from "react";
import { Typography } from "antd";
import PropTypes from "prop-types";
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

Restaurant.prototypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    menu: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired
  })
};

export default Restaurant;
