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
      let newQuantity = (state[payload.id] || 0) - 1;

      if (newQuantity < 0) {
        let newState = {
          ...state
        };

        delete newState[payload.id];
        return newState;
      }

      return {
        ...state,
        [payload.id]: newQuantity
      };

    default:
      return state;
  }
};
