import React from "react";
import { Typography } from "antd";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";

function Restaurant({ restaurant }) {
  return (
    <div>
      <Typography.Title>{restaurant.name}</Typography.Title>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array
  }).isRequired
};

export default Restaurant;
