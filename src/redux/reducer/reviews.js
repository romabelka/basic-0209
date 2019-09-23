import { Record, OrderedMap } from "immutable";
import { arrToImmutableMap } from "../utils";
import { ADD_REVIEW, FETCH_REVIEWS, START, ERROR, SUCCESS } from "../constants";

const ReviewRecord = Record({
  id: null,
  text: "",
  rating: null,
  userId: null
});

const ReducerRecord = Record({
  entities: new OrderedMap(),
  loading: true,
  loaded: false,
  error: null
});

export default (
  state = new ReducerRecord(),
  { type, payload, id, response, error }
) => {
  switch (type) {
    case ADD_REVIEW:
      return state.set(
        "entities",
        state.entities.merge({
          [id]: new ReviewRecord({ ...payload.review, id })
        })
      );

    case FETCH_REVIEWS + START:
      return state.set("loading", true);

    case FETCH_REVIEWS + SUCCESS:
      return state
        .set(
          "entities",
          state.entities.merge(arrToImmutableMap(response, ReviewRecord))
        )
        .set("loading", false)
        .set("loaded", true)
        .set("error", null);

    case FETCH_REVIEWS + ERROR:
      return state.set("loading", false).set("error", error);

    default:
      return state;
  }
};
