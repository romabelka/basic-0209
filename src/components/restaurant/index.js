import React from "react";
import { Typography } from "antd";
import Reviews from "../reviews";
import Menu from "../menu";
import * as PropTypes from "prop-types";

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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired
    }).isRequired,
    menu: Menu.propTypes.menu,
    reviews: Reviews.propTypes.reviews
  })
};

export default Restaurant;
