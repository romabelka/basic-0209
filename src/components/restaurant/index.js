import React from "react";
import Reviews from "../reviews";
import Menu from "../menu";
import PropTypes from "prop-types";
import Hero from "../app/hero";
import styles from "./restaurant.module.css";
import { Col, Row, Tabs } from "antd";
import { Route } from "react-router-dom";

function Restaurant({ restaurant }) {
  return (
    <>
      <Hero heading={restaurant.name} />
      <Route
        path="/restaurants/:id/:tab"
        render={({
          match: {
            params: { tab, id }
          },
          history
        }) => (
          <Tabs
            activeKey={tab}
            onTabClick={tab => history.push(`/restaurants/${id}/${tab}`)}
            tabPosition="top"
            animated={false}
            className={styles.contentTabs}
          >
            <Tabs.TabPane tab="Menu" key="menu" className={styles.tabPane}>
              <Row type="flex" justify="center">
                <Col span={24}>
                  <Menu restaurant={restaurant} />
                </Col>
              </Row>
            </Tabs.TabPane>
            <Tabs.TabPane
              tab="Reviews"
              key="reviews"
              className={styles.tabPane}
            >
              <Row type="flex" justify="center">
                <Col span={24}>
                  <Reviews restaurant={restaurant} />
                </Col>
              </Row>
            </Tabs.TabPane>
          </Tabs>
        )}
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
