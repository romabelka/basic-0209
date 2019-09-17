import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import ContentTabs from "../content-tabs";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";

function Restaurant({ restaurant, name }) {
  const contentItems = [
    {
      tabTitle: "Menu",
      tabContent: <Menu id={restaurant} />
    },

    {
      tabTitle: "Reviews",
      tabContent: <Reviews id={restaurant} />
    }
  ];

  return (
    <>
      <Hero heading={name} />
      <ContentTabs items={contentItems} tabPaneClassName={styles.tabPane} />
    </>
  );
}

Restaurant.propTypes = {
  restaurant: PropTypes.string,
  name: PropTypes.string
};

export default Restaurant;
