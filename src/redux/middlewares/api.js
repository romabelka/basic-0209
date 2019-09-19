import { ERROR, START, SUCCESS } from "../constants";

export default store => next => async action => {
  const { callAPI, type, ...rest } = action;

  if (!callAPI) return next(action);

  next({
    ...rest,
    type: type + START
  });

  try {
    const data = await fetch(callAPI);
    const response = await data.json();

    next({
      ...rest,
      type: type + SUCCESS,
      response
    });
  } catch (error) {
    next({
      ...rest,
      type: type + ERROR,
      error
    });
  }
};
