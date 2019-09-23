import { OrderedMap } from "immutable";
import { DECREMENT, INCREMENT } from "../constants";

export default (order = new OrderedMap(), { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return order.set(payload.id, (order.get(payload.id) || 0) + 1);
    case DECREMENT:
      return order.set(
        payload.id,
        Math.max((order.get(payload.id) || 0) - 1, 0)
      );

    default:
      return order;
  }
};
