import uuid from "uuid/v4";

export default store => next => action => {
  action.payload.uuid = uuid();
  next(action);
};
