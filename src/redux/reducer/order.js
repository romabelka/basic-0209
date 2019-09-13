import { DECREMENT, INCREMENT, REMOVE } from "../constants";

function removeFromState(id, state = {}) {
  const newState = { ...state };
  delete newState[id];

  return newState;
}

//{[productId]: amount}
export default (state = {}, action) => {
  const { type, payload = {} } = action;
  const { product, amount = 0 } = state[payload.id] || {};

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          product: product ? product : { ...payload },
          amount: amount + 1
        }
      };
    case DECREMENT:
      if (amount <= 1) {
        return removeFromState(payload.id, state);
      }

      return {
        ...state,
        [payload.id]: {
          product: product ? product : { ...payload },
          amount: amount - 1
        }
      };

    case REMOVE:
      return removeFromState(payload.id, state);

    default:
      return state;
  }
};
