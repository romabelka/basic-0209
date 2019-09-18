import { SUBMIT_REVIEW } from "./../constants/index";
import uuid4 from "uuid/v4";

export default store => next => action => {
  if (action.type == SUBMIT_REVIEW) {
    action.payload.id = uuid4();
  }
  next(action);
};
