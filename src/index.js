import React from "react";
import ReactDOM from "react-dom";
import Restaurant from "./components/restaurant";
import { restaurants } from "./fixtures";
import "antd/dist/antd.css";

ReactDOM.render(
  // Here we work only with first restaurant in a list. I didn't change it purposely.
  <Restaurant restaurant={restaurants[0]} />,
  document.getElementById("root")
);
