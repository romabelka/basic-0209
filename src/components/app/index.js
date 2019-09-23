import { Layout } from "antd";
import React from "react";

import Header from "./header";
import Content from "../content";
import Basket from "../basket";
import { Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Header />
      <main role="main">
        <Route path="/checkout" component={Basket} />
        <Route path="/restaurants/:id" component={Content} />
      </main>
    </Layout>
  );
}

export default App;
