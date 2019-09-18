import { DECREMENT, INCREMENT } from "../constants";

//{[productId]: amount}
export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) + 1
      };
    case DECREMENT:
      let newState = {
        ...state,
        [payload.id]: (state[payload.id] || 0) - 1
      };

      // if (newState[payload.id] < 1) delete newState[payload.id]

      return newState;

    default:
      return state;
  }
};
