import { normalizedUsers } from "../../fixtures";
import { arrToMap } from "../utils";

export default (users = arrToMap(normalizedUsers), action) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
