import { combineReducers } from "redux";
import orderReducer from "./order";
import total from "./total";

export default combineReducers({
  order: orderReducer,
  total: total,
  foo: () => "bar"
});
