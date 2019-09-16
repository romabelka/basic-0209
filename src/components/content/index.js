import React from "react";
import Restaurant from "../restaurant";
import { restaurants } from "../../fixtures";

function Content() {
  return <Restaurant restaurant={restaurants[0]} />;
}

export default Content;
