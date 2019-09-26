import { Record, OrderedMap } from "immutable";
import { arrToImmutableMap } from "../utils";
import { FETCH_USERS, START, SUCCESS } from "../constants";

const UserRecord = Record({
  id: null,
  name: ""
});

const UsersRecord = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap()
});

export default (users = new UsersRecord(), { type, payload }) => {
  switch (type) {
    case FETCH_USERS + START:
      return users.set("loading", true);

    case FETCH_USERS + SUCCESS:
      return users
        .set("loading", false)
        .set("loaded", true)
        .set("entities", arrToImmutableMap(payload.users, UserRecord));

    default:
      return users;
  }
};
