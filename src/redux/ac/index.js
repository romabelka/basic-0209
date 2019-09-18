import { ADD_REVIEW, DECREMENT, INCREMENT } from "../constants";

export const increment = id => ({
  type: INCREMENT,
  payload: { id }
});

export const decrement = id => ({
  type: DECREMENT,
  payload: { id }
});

export const addReview = (restaurantId, text, rating) => ({
  type: ADD_REVIEW,
  payload: { restaurantId, review: { text, rating } }
});
