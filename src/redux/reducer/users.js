import { normalizedUsers } from "../../fixtures";
import { arrToImmutableMap, arrToMap } from "../utils";
import { OrderedMap, Record } from "immutable";
import { FETCH_USERS, SUCCESS } from "../constants";

const UsersRecord = Record({
  id: null,
  name: ""
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loaded: false
});

export default (state = new ReducerRecord(), action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS + SUCCESS:
      return state
        .set("loaded", true)
        .set("entities", arrToImmutableMap(payload.users, UsersRecord));

    default:
      return state;
  }
};
