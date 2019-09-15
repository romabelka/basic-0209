import { DECREMENT, INCREMENT, ADD, DEL } from "../constants";

export const increment = id => ({
  type: INCREMENT,
  payload: { id }
});

export const decrement = id => ({
  type: DECREMENT,
  payload: { id }
});

export const add = ({ id, name, price }) => ({
  type: ADD,
  payload: { id, name, price }
});

export const del = id => ({
  type: DEL,
  payload: { id }
});
