import React from "react";
import Restaurant from "../restaurant";
import { connect } from "react-redux";
import ContentTabs from "../content-tabs";

function Content({ restaurants }) {
  const items = Object.keys(restaurants).map(id => {
    const restaurant = restaurants[id];

    return {
      tabTitle: restaurant.name,
      tabContent: <Restaurant restaurant={restaurant} />
    };
  });

  return <ContentTabs items={items} />;
}

export default connect(state => ({
  restaurants: state.restaurants
}))(Content);
