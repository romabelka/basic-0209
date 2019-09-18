import { DECREMENT, INCREMENT, SAVE_REVIEW } from "../constants";

export const increment = id => ({
  type: INCREMENT,
  payload: { id }
});

export const decrement = id => ({
  type: DECREMENT,
  payload: { id }
});

export const saveReview = (text, rate, restaurant, uuid) => ({
  type: SAVE_REVIEW,
  payload: { text, rate, restaurant, uuid }
});
