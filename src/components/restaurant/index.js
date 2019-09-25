import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import ContentTabs from "../content-tabs";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";
import { Route, withRouter } from "react-router-dom";

function Restaurant({ restaurant, match, history }) {
  const contentItems = [
    {
      tabTitle: "Menu",
      id: "menu",
      tabContent: <Menu restaurant={restaurant} />
    },
    {
      tabTitle: "Reviews",
      id: "reviews",
      tabContent: <Reviews restaurant={restaurant} />
    }
  ];

  return (
    <>
      <Hero heading={restaurant.name} />
      <Route
        path={`${match.path}/:tabKey?`}
        render={routeProps => {
          const tabKey = routeProps.match.params.tabKey;
          const defaultTabKey =
            tabKey && contentItems.find(item => item.id === tabKey)
              ? tabKey
              : "";

          return (
            <ContentTabs
              {...routeProps}
              masterUrl={match.url}
              items={contentItems}
              activeTabKey={defaultTabKey}
              tabPaneClassName={styles.tabPane}
            />
          );
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
