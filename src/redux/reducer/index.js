import { combineReducers } from "redux";
import orderReducer from "./order";
import restaurants from "./restaurants";
import reviews from "./reviews";
import products from "./products";

export default combineReducers({
  order: orderReducer,
  restaurants: restaurants,
  reviews,
  products
});
