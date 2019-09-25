import { OrderedMap, Record } from "immutable";
import { arrToImmutableMap } from "../utils";
import { SUCCESS, ERROR, START, FETCH_USERS } from "../constants";

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: false,
  loaded: false,
  error: null
});

const UserRecord = Record({
  id: null,
  name: null
});

export default (users = new ReducerRecord(), action) => {
  const { type, response, error } = action;

  switch (type) {
    case FETCH_USERS + START:
      return users.set("loading", true);
    case FETCH_USERS + ERROR:
      return users.set("loading", false).set("error", error);
    case FETCH_USERS + SUCCESS:
      return users
        .set("loading", false)
        .set("loaded", true)
        .set("entities", arrToImmutableMap(response, UserRecord));
    default:
      return users;
  }
};
