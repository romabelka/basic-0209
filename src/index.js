import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Restaurant from "./components/restaurant";
import BasketGoods from "./components/basket-goods";
import { restaurants } from "./fixtures";
import { Tabs } from "antd";
import "./index.css";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BasketGoods />
    <Tabs>
      {restaurants.map(item => (
        <Tabs.TabPane key={item.id} tab={item.name}>
          <Restaurant restaurant={item} />
        </Tabs.TabPane>
      ))}
    </Tabs>
  </Provider>,
  document.getElementById("root")
);
