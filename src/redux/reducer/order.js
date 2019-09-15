import { DECREMENT, INCREMENT, ADD, DEL } from "../constants";

//{[productId]: amount}
export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          amount: state[payload.id].amount + 1
        }
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: {
          ...state[payload.id],
          amount: state[payload.id].amount - 1
        }
      };
    case ADD:
      return {
        ...state,
        [payload.id]: {
          ...payload,
          amount: 1
        }
      };
    case DEL:
      const newState = { ...state };
      delete newState[payload.id];
      return {
        ...newState
      };

    default:
      return state;
  }
};
