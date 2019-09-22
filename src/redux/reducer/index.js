import { combineReducers } from "redux";
import orderReducer from "./order";
import restaurants from "./restaurants";
import reviews from "./reviews";
import products from "./products";
import users from "./users";

export default combineReducers({
  order: orderReducer,
  restaurants,
  reviews,
  products,
  users
});
