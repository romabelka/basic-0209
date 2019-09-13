import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Restaurant from "./components/restaurant";
import { restaurants } from "./fixtures";
import "./index.css";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Restaurant restaurant={restaurants[0]} />
  </Provider>,
  document.getElementById("root")
);
