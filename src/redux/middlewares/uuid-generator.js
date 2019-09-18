import { ADD_REVIEW } from "../constants";

const uuidv1 = require("uuid/v1");

export default store => next => action => {
  console.log("---", "dispatching", action);
  switch (action.type) {
    case ADD_REVIEW:
      action.payload.id = uuidv1();
      next(action);
      break;
    default:
      next(action);
  }
};
