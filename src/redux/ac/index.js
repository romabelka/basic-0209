import { DECREMENT, INCREMENT, ADD_REVIEW } from "../constants";

export const increment = id => ({
  type: INCREMENT,
  payload: { id }
});

export const decrement = id => ({
  type: DECREMENT,
  payload: { id }
});

export const addReview = ({
  id,
  userId = null,
  text,
  rating = 0,
  restaurantId
}) => ({
  type: ADD_REVIEW,
  payload: { id, userId, text, rating, restaurantId },
  generate: { uuid: null }
});
