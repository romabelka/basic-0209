import { normalizedUsers } from "../../fixtures";
import { arrToImmutableMap } from "../utils";
import { Record } from "immutable";

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
