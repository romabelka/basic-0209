import { normalizedUsers } from "../../fixtures";

const defaultUsers = normalizedUsers.reduce((acc, review) => {
  acc[review.id] = review;
  return acc;
}, {});

export default (reviews = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
