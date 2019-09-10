import React from "react";
import ReactDOM from "react-dom";
import Restaurant from "./components/restaurant";
import { restaurants } from "./fixtures";
import "./index.css";

ReactDOM.render(
  <Restaurant restaurant={restaurants[0]} />,
  document.getElementById("root")
);
