import React from "react";
import Restaurant from "../restaurant";
import { connect } from "react-redux";
import ContentTabs from "../content-tabs";

function Content({ restaurants }) {
  const items = Object.keys(restaurants).map(id => ({
    tabTitle: restaurants[id].name,
    tabContent: <Restaurant restaurant={id} name={restaurants[id].name} />
  }));
  return <ContentTabs items={items} />;
}

export default connect(state => ({
  restaurants: state.restaurants
}))(Content);
