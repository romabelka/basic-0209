import { normalizedUsers } from "../../fixtures";
import { arrToImmutableMap } from "../utils";
import { OrderedMap, Record } from "immutable";
import { FETCH_REVIEWS, FETCH_USERS, START, SUCCESS } from "../constants";

const UserRecord = Record({
  id: null,
  name: ""
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: false,
  loaded: false,
  error: null
});

export default (state = new ReducerRecord(), action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS + START:
      return state.set("loading", true);

    case FETCH_USERS + SUCCESS:
      return state
        .set("loading", false)
        .set("loaded", true)
        .set("entities", arrToImmutableMap(payload.users, UserRecord));

    default:
      return state;
  }
};
