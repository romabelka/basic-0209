import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import orderReducer from "./order";
import restaurants from "./restaurants";
import reviews from "./reviews";
import products from "./products";
import users from "./users";
import history from "../../history";

export default combineReducers({
  router: connectRouter(history),
  order: orderReducer,
  restaurants,
  reviews,
  products,
  users
});
