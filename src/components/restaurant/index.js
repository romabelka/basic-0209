import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import ContentTabs from "../content-tabs";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";
import { connect } from "react-redux";
import { createRestarauntReviewsSelector } from "../../redux/selectors";

function Restaurant({ restaurant, reviews }) {
  const contentItems = [
    {
      tabTitle: "Menu",
      tabContent: <Menu menu={restaurant.menu} />
    },
    {
      tabTitle: "Reviews",
      tabContent: <Reviews reviews={reviews} />
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
  }),
  // from redux
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      userId: PropTypes.string,
      text: PropTypes.string,
      rating: PropTypes.number
    })
  )
};

export default connect((state, props) => ({
  reviews: createRestarauntReviewsSelector(props.restaurant)(state)
}))(Restaurant);
