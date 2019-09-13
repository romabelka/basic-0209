import { DECREMENT, INCREMENT } from "../constants";

export const increment = (id, name) => ({
  type: INCREMENT,
  payload: { id, name }
});

export const decrement = (id, name) => ({
  type: DECREMENT,
  payload: { id, name }
});
