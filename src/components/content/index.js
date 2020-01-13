import React from "react";
import { Row, Col } from "antd";
import Restaurant from "../restaurant";
import { connect } from "react-redux";
import { restaurantSelector, restaurantsLoading } from "../../redux/selectors";
import { fetchRestaurants } from "../../redux/ac";
import Loader from "../loader";

function Content({ restaurant, loading }) {
  if (loading || !restaurant) return <Loader />;
  return (
    <Row type="flex" justify="center">
      <Col span={24}>
        <Restaurant restaurant={restaurant} />
      </Col>
    </Row>
  );
}

export default connect(
  (state, ownProps) => ({
    restaurant: restaurantSelector(state, ownProps.match.params),
    loading: restaurantsLoading(state)
  }),
  { fetchRestaurants }
)(Content);
