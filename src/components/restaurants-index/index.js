import React, { useState } from "react";
import PropTypes from "prop-types";
import Hero from "../app/hero";
import styles from "./restaurants-index.module.css";
import { Col, Row, Tabs, Typography } from "antd";
import RestaurantItem from "./restaurant-item";

function RestaurantsIndex({ restaurants }) {
  const [activeTab, setActiveTab] = useState();
  const cuisines = [
    ...new Set(restaurants.flatMap(restaurant => restaurant.cuisines))
  ];

  return (
    <>
      <Hero heading="Order food" description="from 100 restaurants">
        <Typography style={{ color: "white", transform: "translate(0, 60px)" }}>
          Chose your favourite cuisine:
        </Typography>
      </Hero>
      <Tabs
        activeKey={activeTab}
        onTabClick={setActiveTab}
        tabPosition="top"
        animated={false}
        className={styles.contentTabs}
      >
        {cuisines.map(cuisine => (
          <Tabs.TabPane tab={cuisine} key={cuisine} className={styles.tabPane}>
            <Row type="flex" justify="center">
              <Col span={24}>
                {restaurants
                  .filter(restaurant => restaurant.cuisines.includes(cuisine))
                  .map(restaurant => (
                    <RestaurantItem
                      restaurant={restaurant}
                      key={restaurant.id}
                    />
                  ))}
              </Col>
            </Row>
          </Tabs.TabPane>
        ))}
      </Tabs>
    </>
  );
}

RestaurantsIndex.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array
  })
};

export default RestaurantsIndex;
