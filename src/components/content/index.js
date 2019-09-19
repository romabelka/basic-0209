import React, { useEffect } from "react";
import Restaurant from "../restaurant";
import { connect } from "react-redux";
import ContentTabs from "../content-tabs";
import { restaurantsListSelector } from "../../redux/selectors";
import { fetchRestaurants } from "../../redux/ac";

function Content({ restaurants, fetchRestaurants }) {
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  const items = restaurants.map(restaurant => ({
    tabTitle: restaurant.name,
    tabContent: <Restaurant restaurant={restaurant} />
  }));
  return <ContentTabs items={items} />;
}

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state)
  }),
  { fetchRestaurants }
)(Content);
