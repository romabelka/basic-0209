import React from "react";
import { Route, Redirect } from "react-router-dom";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import ContentTabs from "../content-tabs";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";

function Restaurant({ restaurant, match }) {
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
      <Route
        path={`${match.path}/:tabId`}
        children={routeProps => {
          if (match.isExact && !routeProps.match) {
            return <Redirect to={`/restaurants/${match.params.id}/menu`} />;
          } else {
            return (
              <ContentTabs
                items={contentItems}
                tabPaneClassName={styles.tabPane}
                {...routeProps}
              />
            );
          }
        }}
      />
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
