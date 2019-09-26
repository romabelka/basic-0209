import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import ContentTabs from "./tabs";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";

function Restaurant({ restaurant }) {
  const contentItems = [
    {
      tabTitle: "Menu",
      tabContent: <Menu restaurant={restaurant} />,
      tabId: "menu"
    },
    {
      tabTitle: "Reviews",
      tabContent: <Reviews restaurant={restaurant} />,
      tabId: "reviews"
    }
  ];

  return (
    <>
      <Hero heading={restaurant.name} />
      <ContentTabs items={contentItems} tabPaneClassName={styles.tabPane} />
    </>
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
