import { Map, Record } from "immutable";
import { normalizedUsers } from "../../fixtures";
import { arrToImmutableMap } from "../utils";

const UserRecord = Record({
  id: null,
  name: ""
});

export default (
  users = new Map(arrToImmutableMap(normalizedUsers, UserRecord)),
  { type }
) => {
  switch (type) {
    default:
      return users;
  }
};
