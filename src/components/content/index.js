import React, { useEffect } from "react";
import Restaurant from "../restaurant";
import { connect } from "react-redux";
import ContentTabs from "../content-tabs";
import {
  restaurantsListSelector,
  restaurantsLoading
} from "../../redux/selectors";
import { fetchRestaurants } from "../../redux/ac";
import Loader from "../loader";

function Content({ restaurants, loading, fetchRestaurants }) {
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  if (loading) return <Loader size="large" tip="Loading..." />;

  const items = restaurants.map(restaurant => ({
    tabTitle: restaurant.name,
    tabContent: <Restaurant restaurant={restaurant} />
  }));
  return <ContentTabs items={items} />;
}

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoading(state)
  }),
  { fetchRestaurants }
)(Content);
