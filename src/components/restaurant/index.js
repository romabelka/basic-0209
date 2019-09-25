import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";
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
      tabKey: "menu",
      tabContent: <Menu restaurant={restaurant} />
    },
    {
      tabTitle: "Reviews",
      tabKey: "reviews",
      tabContent: <Reviews restaurant={restaurant} />
    }
  ];
  return (
    <>
      <Hero heading={restaurant.name} />
      <Route
        path={`${match.path}/:tabKey`}
        children={routeProps => {
          if (!routeProps.match) {
            return <Redirect to={`${match.url}/menu`} />;
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

export default withRouter(Restaurant);
