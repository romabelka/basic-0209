import { Record } from "immutable";
import { ReducerRecord } from "../types";
import { arrToImmutableMap } from "../utils";
import { ERROR, FETCH_REVIEWS, START, SUCCESS, ADD_REVIEW } from "../constants";

const ReviewRecord = Record({
  id: null,
  text: "",
  rating: null,
  userId: null
});

export default (
  state = new ReducerRecord(),
  { type, payload, id, response, error }
) => {
  switch (type) {
    case FETCH_REVIEWS + START:
      return state.set("error", null).set("loading", true);

    case FETCH_REVIEWS + SUCCESS:
      return state
        .set("loading", false)
        .set("loaded", true)
        .set("error", null)
        .set(
          "entities",
          state.entities.merge(arrToImmutableMap(response, ReviewRecord))
        );

    case FETCH_REVIEWS + ERROR:
      return state.set("error", error).set("loading", false);

    case ADD_REVIEW:
      return state.setIn(
        ["entities", id],
        new ReviewRecord({ ...payload.review, id })
      );

    default:
      return state;
  }
};
