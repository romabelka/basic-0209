import React from "react";
import { Typography } from "antd";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import Basket from "../basket";

function Restaurant({ restaurant }) {
  function getMenu(menu) {
    return menu.reduce(
      (obj, product) => Object.assign(obj, { [product.id]: product }),
      {}
    );
  }

  return (
    <div>
      <Typography.Title>{restaurant.name}</Typography.Title>
      <Basket menu={getMenu(restaurant.menu)} />
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
  })
};

export default Restaurant;
