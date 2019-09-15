import { combineReducers } from "redux";
import orderReducer from "./order";
import restaurant from "./restaurant";

export default combineReducers({
  order: orderReducer,
  restaurant: restaurant,
  foo: () => "bar"
});
