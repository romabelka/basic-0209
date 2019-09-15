import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { restaurants } from "./fixtures";
import "./index.css";
import store from "./redux/store";
import MainLayout from "./components/main-layout";

ReactDOM.render(
  <Provider store={store}>
    <MainLayout restaurants={restaurants} />
  </Provider>,
  document.getElementById("root")
);
