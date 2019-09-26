import { Layout, Typography } from "antd";
import React from "react";

import Header from "./header";
import Basket from "../basket";
import { Route, Switch } from "react-router-dom";
import RestaurantsPage from "../pages/restaurants";

function App() {
  return (
    <Layout>
      <Header />
      <main role="main">
        <Switch>
          <Route path="/checkout" exact component={Basket} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route
            path="/error"
            render={() => (
              <Typography.Title level={1}>Error Page</Typography.Title>
            )}
          />
          <Route
            path="/sign-in"
            render={() => (
              <Typography.Title level={1}>SignIn Page</Typography.Title>
            )}
          />
          <Route
            path="/"
            render={() => (
              <Typography.Title level={1}>Not Found Page</Typography.Title>
            )}
          />
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
