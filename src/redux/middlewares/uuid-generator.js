import uuid from "uuid/v4";
import { ADD_REVIEW } from "../constants";

export default store => next => action => {
  if (ADD_REVIEW === action.type) {
    // patch payload
    action.payload.review.id = uuid("string");
  }
  next(action);
};
