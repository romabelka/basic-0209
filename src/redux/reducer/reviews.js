import { Record, OrderedMap } from "immutable";
import { arrToImmutableMap, createReducerRecord } from "../utils";
import { ADD_REVIEW, FETCH_REVIEWS, START, SUCCESS, ERROR } from "../constants";

const ReviewRecord = Record({
  id: "",
  text: "",
  rating: null,
  userId: ""
});

export default (
  state = createReducerRecord(new OrderedMap()),
  { type, payload, id, error, response }
) => {
  switch (type) {
    case FETCH_REVIEWS + START:
      return state
        .set("loaded", false)
        .set("loading", true)
        .set("error", null);

    case FETCH_REVIEWS + SUCCESS:
      return state
        .set("loaded", true)
        .set("loading", false)
        .set("error", null)
        .update("entities", entities =>
          entities.merge(arrToImmutableMap(response, ReviewRecord))
        );

    case FETCH_REVIEWS + ERROR:
      return state
        .set("loaded", false)
        .set("loading", false)
        .set("error", error);

    case ADD_REVIEW:
      return state.update("entities", entities => {
        return entities.merge({
          [id]: new ReviewRecord({ ...payload.review, id })
        });
      });

    default:
      return state;
  }
};
