import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";
import { Tabs } from "antd";
import { Route, Redirect, Switch, Link } from "react-router-dom";
import RateComponent from "../../components/rate";

function Restaurant({ restaurant }) {
  console.log("---", restaurant.averageRating);
  return (
    <>
      <Hero
        heading={restaurant.name}
        img={restaurant.headerImage}
        description={restaurant.cuisines.join(", ")}
      >
        <RateComponent
          sm
          disabled
          amount={restaurant.reviews.length}
          value={restaurant.averageRating}
        />
      </Hero>
      <Switch>
        <Route
          path="/restaurants/:id/:tab"
          render={({
            match: {
              params: { tab, id }
            },
            history
          }) => (
            <>
              <Tabs
                activeKey={tab}
                onTabClick={tab => history.push(`/restaurants/${id}/${tab}`)}
                tabPosition="top"
                animated={false}
                className={styles.contentTabs}
              >
                <Tabs.TabPane tab="Menu" key="menu" className={styles.tabPane}>
                  <Menu restaurant={restaurant} />
                </Tabs.TabPane>
                <Tabs.TabPane
                  tab="Reviews"
                  key="reviews"
                  className={styles.tabPane}
                >
                  <Reviews restaurant={restaurant} />
                </Tabs.TabPane>
              </Tabs>
              <div className={styles.fixedMobileBasketPanel}>
                <span>Basket € 8.95</span>
                <Link to="/checkout" className={styles.checkoutBtn}>
                  checkout
                </Link>
              </div>
            </>
          )}
        />
        <Redirect
          from="/restaurants/:id"
          to={`/restaurants/${restaurant.id}/menu`}
        />
      </Switch>
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
