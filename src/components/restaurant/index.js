import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import ContentTabs from "../content-tabs";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";

function Restaurant({ restaurant }) {
  const contentItems = [
    {
      tabTitle: "Menu",
      tabContent: <Menu restaurant={restaurant} />
    },
    {
      tabTitle: "Reviews",
      tabContent: <Reviews restaurant={restaurant} />
    }
  ];

  return (
    <div>
      <Typography.Title level={2}>{restaurant.name}</Typography.Title>
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
