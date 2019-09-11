import React from "react";
import PropTypes from "prop-types";
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

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array.isRequired,
    reviews: PropTypes.array.isRequired
  }).isRequired
};

export default Restaurant;
