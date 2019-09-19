import React from "react";
import Restaurant from "../restaurant";
import { connect } from "react-redux";
import ContentTabs from "../content-tabs";

import { restaurantsSelector } from "../../redux/selectors";

function Content({ restaurants }) {
  const items = Object.keys(restaurants).map(key => ({
    tabTitle: restaurants[key].name,
    tabContent: <Restaurant restaurant={restaurants[key]} />
  }));
  return <ContentTabs items={items} />;
}

export default connect(state => ({
  restaurants: restaurantsSelector(state)
}))(Content);
