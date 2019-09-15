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
      if (!state[payload.id]) return state;
      if (state[payload.id] === 1) {
        const { [payload.id]: _, ...newState } = state;
        return newState;
      }

      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) - 1
      };

    default:
      return state;
  }
};
