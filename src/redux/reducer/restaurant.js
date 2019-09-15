export default (state = {}, action) => {
  const { payload } = action;
  return payload
    ? {
        ...state,
        active: payload.id
      }
    : state;
};
