import { combineReducers } from "redux";
import orderReducer from "./order";
import restaurants from "./restaurants";

export default combineReducers({
  order: orderReducer,
  restaurants,
  foo: (bar = "") => bar + "a"
});
