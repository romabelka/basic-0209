import uuid4 from "uuid/v4";
import { ADD_REVIEW } from "../constants";

export default store => next => action => {
  if (action.type === ADD_REVIEW) {
    action.payload.id = uuid4();
  }
  next(action);
};
