import { Layout, Typography } from "antd";
import React from "react";

import Header from "./header";
import Content from "../content";
import Basket from "../basket";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Header />
      <main role="main">
        <Switch>
          <Route path="/checkout" exact component={Basket} />
          <Route path="/restaurants/:id" component={Content} />
          <Route path="/" component={NotFound} />
        </Switch>
      </main>
    </Layout>
  );
}

function NotFound() {
  return <Typography.Title level={1}>Not Found Page</Typography.Title>;
}

export default App;
