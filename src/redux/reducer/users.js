import { normalizedUsers } from "../../fixtures";

const defaultReviews = normalizedUsers.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});

export default (users = defaultReviews, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
