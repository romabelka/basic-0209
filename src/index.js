import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Restaurant from "./components/restaurant";
import { restaurants } from "./fixtures";
import "./index.css";
import store from "./redux/store";
import { Tabs } from "antd";

const { TabPane } = Tabs;

ReactDOM.render(
  <Provider store={store}>
    <Tabs>
      {restaurants.map(restaurant => (
        <TabPane tab={restaurant.name} key={restaurant.id}>
          <Restaurant restaurant={restaurant} />
        </TabPane>
      ))}
    </Tabs>
  </Provider>,
  document.getElementById("root")
);
