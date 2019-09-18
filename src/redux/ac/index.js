import { DECREMENT, INCREMENT, ADD_REVIEW } from "../constants";

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
  uuid: "",
  restaurantId,
  text,
  rating
});
