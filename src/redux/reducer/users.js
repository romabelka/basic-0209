import { normalizedUsers } from "../../fixtures";
import { listToObjectById } from "../../utils";

const defaultUsers = listToObjectById(normalizedUsers);

export default (users = defaultUsers, action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
