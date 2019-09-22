import { Map } from "immutable";
import { DECREMENT, INCREMENT } from "../constants";

//{[productId]: amount}
export default (state = new Map(), action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return state.update(payload.id, amount => (amount || 0) + 1);

    case DECREMENT:
      return state.update(payload.id, amount => (amount || 0) - 1);

    default:
      return state;
  }
};
