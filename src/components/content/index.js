import React, { useEffect } from "react";
import { Tabs, Row, Col } from "antd";
import Restaurant from "../restaurant";
import { connect } from "react-redux";
import {
  restaurantsListSelector,
  restaurantsLoading
} from "../../redux/selectors";
import { fetchRestaurants } from "../../redux/ac";
import styles from "./content.module.css";

function Content({ restaurants, loading, fetchRestaurants, match, history }) {
  return (
    <Tabs
      activeKey={match.params.id}
      onTabClick={id => history.push(`/restaurants/${id}`)}
      tabPosition="top"
      animated={false}
      className={styles.contentTabs}
    >
      {restaurants.map(restaurant => (
        <Tabs.TabPane
          tab={restaurant.name}
          key={restaurant.id}
          className={styles.tabPane}
        >
          <Row type="flex" justify="center">
            <Col span={24}>
              <Restaurant restaurant={restaurant} />
            </Col>
          </Row>
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
}

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoading(state)
  }),
  { fetchRestaurants }
)(Content);
