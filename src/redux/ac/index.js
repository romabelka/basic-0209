import { DECREMENT, INCREMENT, SUBMIT_REVIEW } from "../constants";

export const increment = id => ({
  type: INCREMENT,
  payload: { id }
});

export const decrement = id => ({
  type: DECREMENT,
  payload: { id }
});

export const submitReview = (text, rate, restaurantId) => ({
  type: SUBMIT_REVIEW,
  payload: { text, rate, restaurantId }
});
