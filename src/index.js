import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Tabs } from "antd";
import Restaurant from "./components/restaurant";
import { restaurants } from "./fixtures";
import "./index.css";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
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
