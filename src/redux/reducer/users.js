import { normalizedUsers } from "../../fixtures";

const defaultUsers = normalizedUsers.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
