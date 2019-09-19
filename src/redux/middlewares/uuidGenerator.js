import uuid4 from "uuid/v4";

export default store => next => (action = {}) => {
  if (action.generate && action.generate.uuid === null) {
    action.generate.uuid = uuid4();
  }
  next(action);
};
