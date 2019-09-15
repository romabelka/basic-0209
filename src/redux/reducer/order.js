import { Map } from "immutable";
import { DECREMENT, INCREMENT } from "../constants";

//{[productId]: amount}
export default (state = new Map({}), action) => {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return state.update(payload.id, 0, amount => amount + 1);

    case DECREMENT:
      return {
        ...state,
        [payload.id]:
          state[payload.id] > 0
            ? (state[payload.id] || 0) - 1
            : state[payload.id]
      };

    default:
      return state;
  }
};
