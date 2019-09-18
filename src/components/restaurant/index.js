import React from "react";
import { connect } from "react-redux";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import ContentTabs from "../content-tabs";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";

function Restaurant({ restaurant, reviews }) {
  const contentItems = [
    {
      tabTitle: "Menu",
      tabContent: <Menu menu={restaurant.menu} />
    },
    {
      tabTitle: "Reviews",
      tabContent: <Reviews restaurantId={restaurant.id} reviews={reviews} />
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

export default connect((state, ownProps) => {
  return {
    reviews: ownProps.restaurant.reviews.map(
      reviewId => state.reviews[reviewId]
    )
  };
})(Restaurant);
