import React, { useEffect } from "react";
import Restaurant from "../restaurant";
import { connect } from "react-redux";
import { restaurantSelector, restaurantsLoading } from "../../redux/selectors";
import { fetchRestaurants } from "../../redux/ac";
import Loader from "../loader";

function Content({ restaurant, fetchRestaurants, loading }) {
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);
  console.log("---", 123);

  if (loading || !restaurant) return <Loader />;
  return <Restaurant restaurant={restaurant} />;
}

export default connect(
  (state, ownProps) => ({
    restaurant: restaurantSelector(state, ownProps.match.params),
    loading: restaurantsLoading(state)
  }),
  { fetchRestaurants }
)(Content);
