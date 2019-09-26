import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Content from "../../content";
import { Typography } from "antd";
import { connect } from "react-redux";
import {
  restaurantsListSelector,
  restaurantsLoading
} from "../../../redux/selectors";
import { fetchRestaurants, fetchUsers } from "../../../redux/ac";
import Loader from "../../loader";

function RestaurantsPage({
  match,
  fetchRestaurants,
  fetchUsers,
  restaurants,
  loading
}) {
  console.log("--- 1", match);
  useEffect(() => {
    fetchUsers();
    fetchRestaurants();
  }, [fetchRestaurants, fetchUsers]);

  if (loading) return <Loader />;

  return (
    <Route
      path={`${match.path}/:id`}
      children={routeProps => {
        console.log("--- 2", routeProps.match);
        if (!routeProps.match)
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
  { fetchRestaurants, fetchUsers }
)(RestaurantsPage);
