import { Record } from "immutable";
import { arrToImmutableMap, ReducerRecord } from "../utils";
import { ADD_REVIEW, FETCH_REVIEWS, ERROR, START, SUCCESS } from "../constants";

const ReviewRecord = Record({
  id: null,
  text: "",
  rating: null,
  userId: null
});

export default (reviews = new ReducerRecord(), { type, payload, id }) => {
  switch (type) {
    case FETCH_REVIEWS + START:
      return reviews.set("error", null).set("loading", true);

    case FETCH_REVIEWS + SUCCESS:
      return reviews
        .set("loading", false)
        .set("error", null)
        .set(
          "entities",
          reviews.entities.merge(arrToImmutableMap(payload, ReviewRecord))
        ); // есть другой способ это сделать?

    case FETCH_REVIEWS + ERROR:
      return reviews.set("error", payload).set("loading", false);

    case ADD_REVIEW:
      return reviews.setIn(
        ["entities", id],
        new ReviewRecord({ ...payload.review, id })
      );

    default:
      return reviews;
  }
};
