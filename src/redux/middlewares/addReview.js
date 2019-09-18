import uuid from "uuid/v4";
import { ADD_REVIEW } from "../constants";

export default store => next => action => {
  const { type, payload } = action;
  if (type === ADD_REVIEW) {
    payload.id = uuid();
  }
  next(action);
};
