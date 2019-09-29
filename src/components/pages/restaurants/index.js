import React, { useContext, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import Content from "../../content";
import { Typography } from "antd";
import { connect } from "react-redux";
import {
  restaurantsListSelector,
  restaurantsLoading
} from "../../../redux/selectors";
import { fetchRestaurants } from "../../../redux/ac";
import Loader from "../../loader";
import I18nContext from "../../../contexts/i18n-context";

function RestaurantsPage({ match, fetchRestaurants, restaurants, loading }) {
  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  const { trans } = useContext(I18nContext);

  if (loading) return <Loader />;

  return (
    <Route
      path={`${match.path}/:id`}
      children={routeProps => {
        if (!routeProps.match)
          return (
            <div>
              <Typography.Title level={1}>
                {trans("select_restaurant")}
              </Typography.Title>
              {restaurants.map(restaurant => (
                <div key={restaurant.id}>
                  <Link to={`${match.path}/${restaurant.id}/menu`}>
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
  { fetchRestaurants }
)(RestaurantsPage);
