import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Restaurant from "./components/restaurant";
import ShoppingCart from "./components/shopping-cart";
import { restaurants } from "./fixtures";
import "./index.css";
import store from "./redux/store";
import { Tabs, Row, Col } from "antd";

const tab = restaurant => {
  return (
    <Tabs.TabPane tab={restaurant.name} key={restaurant.id}>
      <Restaurant restaurant={restaurant} />
    </Tabs.TabPane>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Row>
      <Col span={18}>
        <Tabs>{restaurants.map(restaurant => tab(restaurant))}</Tabs>
      </Col>
      <Col span={6}>
        <ShoppingCart />
      </Col>
    </Row>
  </Provider>,
  document.getElementById("root")
);
