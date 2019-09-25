import React, { useEffect } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import Content from "../../content";
import { Typography } from "antd";
import { connect } from "react-redux";
import {
  restaurantsListSelector,
  restaurantsLoading
} from "../../../redux/selectors";
import { fetchRestaurants } from "../../../redux/ac";
import Loader from "../../loader";

function RestaurantsPage({ match, fetchRestaurants, restaurants, loading }) {
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  if (loading) return <Loader />;

  return (
    <Route
      path={`${match.path}/:id`}
      children={routeProps => {
        if (!routeProps.match) {
          if (restaurants.length)
            return <Redirect to={`${match.path}/${restaurants[0].id}`} />;

          return (
            <div>
              <Typography.Title level={1}>
                Please select a restaurant
              </Typography.Title>
              {restaurants.map(restaurant => (
                <div key={restaurant.id}>
                  <Link to={`${match.path}/${restaurant.id}`}>
                    {restaurant.name}
                  </Link>
                </div>
              ))}
            </div>
          );
        }
        return <Content {...routeProps} />;
      }}
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
