import { Layout } from "antd";
import React from "react";

import Header from "./header";
import Basket from "../basket";
import { Route, Switch, Redirect } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants";

function App() {
  return (
    <Layout>
      <Header />
      <main role="main">
        <Switch>
          <Route path="/checkout" exact component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/" render={() => <Redirect to="/restaurants" />} />
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
