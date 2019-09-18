function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;

    return v.toString(16);
  });
}

export default store => next => action => {
  if (action.createUuid) {
    const uuid = uuidv4();
    next({ ...action, uuid });
  } else next(action);
};
