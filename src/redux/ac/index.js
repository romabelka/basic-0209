import {
  ADD_REVIEW,
  DECREMENT,
  FETCH_PRODUCTS,
  FETCH_RESTAURANTS,
  FETCH_REVIEWS,
  INCREMENT
} from "../constants";
import { thunk } from "../utils";

export const increment = id => ({
  type: INCREMENT,
  payload: { id }
});

export const decrement = id => ({
  type: DECREMENT,
  payload: { id }
});

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: true
});

export const fetchRestaurants = () =>
  thunk(FETCH_RESTAURANTS, "/api/restaurants");

export const fetchProducts = restaurantId =>
  thunk(FETCH_PRODUCTS, `/api/dishes?id=${restaurantId}`);

export const fetchReviews = restaurantId =>
  thunk(FETCH_REVIEWS, `/api/reviews?id=${restaurantId}`);
