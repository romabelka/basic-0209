import React from "react";
import Restaurant from "../restaurant";
import { connect } from "react-redux";
import ContentTabs from "../content-tabs";
import { restaurantsListSelector } from "../../redux/selectors";

function Content({ restaurants }) {
  const items = restaurants.map(restaurant => ({
    tabTitle: restaurant.name,
    tabContent: <Restaurant restaurant={restaurant} />
  }));
  return <ContentTabs items={items} />;
}

export default connect(state => ({
  restaurants: restaurantsListSelector(state)
}))(Content);
