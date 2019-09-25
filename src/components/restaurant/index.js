import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import { Redirect, Route, withRouter } from "react-router-dom";
import Hero from "../app/hero";
import { Tabs } from "antd";
import styles from "./restaurant.module.css";

function Restaurant({ restaurant, match, location, history }) {
  const { path: routePrefix, url: baseUrl } = match;

  return (
    <>
      <Hero heading={restaurant.name} />
      <Route
        path={`${routePrefix}/:tab`}
        children={routeProps => {
          console.log("--- 3", routeProps.match);
          if (!routeProps.match) {
            return <Redirect to={`${baseUrl}/menu`} />;
          }
          const {
            match: {
              params: { tab }
            }
          } = routeProps;
          return (
            <Tabs
              activeKey={tab}
              onTabClick={key => history.push(`${baseUrl}/${key}`)}
            >
              <Tabs.TabPane key="menu" tab="Menu" className={styles.tabPane}>
                <Menu restaurant={restaurant} />
              </Tabs.TabPane>
              <Tabs.TabPane
                key="reviews"
                tab="Reviews"
                className={styles.tabPane}
              >
                <Reviews restaurant={restaurant} />
              </Tabs.TabPane>
            </Tabs>
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
