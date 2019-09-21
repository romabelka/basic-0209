import { Record } from "immutable";
import { normalizedUsers } from "../../fixtures";
import { arrToImmutableMap } from "../utils";

const UserRecord = Record({
  id: null,
  name: ""
});

export default (
  users = arrToImmutableMap(normalizedUsers, UserRecord),
  action
) => {
  const { type } = action;

  switch (type) {
    default:
      return users;
  }
};
