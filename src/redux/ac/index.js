import { DECREMENT, INCREMENT, ADD_REVIEW } from "../constants";

export const increment = id => ({
  type: INCREMENT,
  payload: { id }
});

export const decrement = id => ({
  type: DECREMENT,
  payload: { id }
});

export const addReview = (id, text, rate) => ({
  type: ADD_REVIEW,
  payload: {
    restaurantID: id,
    text: text,
    rate: rate
  }
});
