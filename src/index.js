import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Restaurant from "./components/restaurant";
import Basket from "./components/basket/index";
import { restaurants } from "./fixtures";
import { Tabs } from "antd";
import "./index.css";
import store from "./redux/store";
import fetchProduct from "./fetchProduct";

ReactDOM.render(
  <Provider store={store}>
    <Basket fetchProduct={fetchProduct} />
    <Tabs defaultActiveKey="1">
      {restaurants.map(restaurant => (
        <Tabs.TabPane tab={restaurant.name} key={restaurant.id}>
          <Restaurant restaurant={restaurant} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  </Provider>,
  document.getElementById("root")
);
