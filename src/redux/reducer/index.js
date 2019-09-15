import { combineReducers } from "redux";
import orderReducer from "./order";
import dataReducer from "./data";

export default combineReducers({
  order: orderReducer,
  data: dataReducer
});
