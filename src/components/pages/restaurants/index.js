import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Content from "../../content";
import { connect } from "react-redux";
import {
  restaurantsListSelector,
  restaurantsLoading
} from "../../../redux/selectors";
import { fetchRestaurants } from "../../../redux/ac";
import Loader from "../../loader";
import RestaurantsIndex from "../../restaurants-index";

function RestaurantsPage({ match, fetchRestaurants, restaurants, loading }) {
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  if (loading) return <Loader />;

  return (
    <Route
      path={`${match.path}/:id`}
      children={routeProps =>
        routeProps.match ? (
          <Content {...routeProps} />
        ) : (
          <RestaurantsIndex restaurants={restaurants} />
        )
      }
    />
  );
}

RestaurantsPage.propTypes = {};

export default connect(
  state => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoading(state)
  }),
  { fetchRestaurants }
)(RestaurantsPage);
