import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Cart from "./components/cart";
import Restaurant from "./components/restaurant";
import { restaurants } from "./fixtures";
import "./index.css";
import store from "./redux/store";
import { Tabs } from "antd";

ReactDOM.render(
  <Provider store={store}>
    <Cart />
    <Tabs>
      {restaurants.map(restaurant => (
        <Tabs.TabPane tab={restaurant.name} key={restaurant.id}>
          <Restaurant restaurant={restaurant} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  </Provider>,
  document.getElementById("root")
);
