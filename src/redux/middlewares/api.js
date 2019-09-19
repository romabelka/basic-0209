export default store => next => async action => {
  const { callAPI } = action;

  if (!callAPI) return next(action);

  const data = await fetch(callAPI);
  const response = await data.json();

  next({
    ...action,
    response
  });
};
