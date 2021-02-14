import React from "react";
import { Route } from "react-router-dom";
import Content from "../../content";

function RestaurantsPage() {
  return <Route path={`$/restaurants/:id`} component={Content} />;
}

RestaurantsPage.propTypes = {};

export default RestaurantsPage;
